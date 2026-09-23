/**
 * Proves the React screens render the same DOM as the Stitch export.
 *
 *   node .stitch/tools/verify.mjs
 *
 * Each screen is server-rendered and structurally diffed against the <body> of its
 * source HTML: same elements in the same order, same attributes, same text. The
 * comparison ignores what React is expected to change — inline on* handlers (ported
 * to props), HTML comments, <script>/<style>, and image URLs now served locally.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import * as parse5 from 'parse5';

const ROOT = path.resolve('C:/00.Project/saju');
const HTML_DIR = path.join(ROOT, '.stitch/html');
const TMP = path.join(ROOT, '.stitch/out/verify-bundle.mjs');

const slugToFile = new Map();
for (const m of fs
  .readFileSync(path.join(ROOT, '.stitch/tools/convert.mjs'), 'utf8')
  .matchAll(/\{ file: '(\d+)', name: '\w+', slug: '([\w-]+)'/g)) {
  slugToFile.set(m[2], m[1]);
}

const assets = JSON.parse(
  fs.readFileSync(path.join(ROOT, '.stitch/out/assets.json'), 'utf8').replace(/^\uFEFF/, ''),
);
const localByRemote = new Map(assets.map((a) => [a.url, `/assets/${a.local}`]));

execFileSync(
  process.execPath,
  [
    path.join(ROOT, 'node_modules/esbuild/bin/esbuild'),
    path.join(ROOT, '.stitch/tools/verify-entry.tsx'),
    '--bundle',
    '--platform=node',
    '--format=esm',
    '--packages=external',
    '--jsx=automatic',
    '--log-level=error',
    `--outfile=${TMP}`,
  ],
  { cwd: ROOT, stdio: ['ignore', 'inherit', 'inherit'] },
);

const rendered = JSON.parse(
  execFileSync(process.execPath, [TMP], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }),
);

/* ------------------------------------------------------------- normalising -- */

// `link` only ever appears in <head>; React 19's SSR also hoists a preload <link>
// per <img>, which never reaches the client DOM.
const SKIP_TAGS = new Set(['script', 'style', 'link']);

const normAttrs = (node) => {
  const out = [];
  for (const a of node.attrs ?? []) {
    const name = (a.prefix ? `${a.prefix}:${a.name}` : a.name).toLowerCase();
    if (/^on[a-z]+$/.test(name)) continue; // inline handlers became React props
    let value = a.value;
    if (name === 'class') value = value.split(/\s+/).filter(Boolean).join(' ');
    if (name === 'style') value = value.replace(/\s*;\s*$/, '').replace(/\s*:\s*/g, ':').replace(/\s*;\s*/g, ';');
    if (name === 'src') value = localByRemote.get(value) ?? value;
    out.push(`${name}=${value}`);
  }
  return out.sort().join('|');
};

/** Flattens a tree into a comparable list of `depth:kind` records. */
const flatten = (node, depth, acc, keepWhitespace) => {
  for (const child of node.childNodes ?? []) {
    if (child.nodeName === '#comment') continue;
    if (child.nodeName === '#text') {
      const text = child.value.replace(/\s+/g, ' ');
      if (!text.trim() && !keepWhitespace) continue;
      if (!text) continue;
      acc.push({ depth, kind: 'text', value: text.trim() ? text.trim() : '·' });
      continue;
    }
    if (SKIP_TAGS.has(child.tagName)) continue;
    acc.push({ depth, kind: 'el', value: `<${child.tagName} ${normAttrs(child)}>` });
    flatten(child, depth + 1, acc, keepWhitespace);
  }
  return acc;
};

const findTag = (n, tag) => {
  if (n.tagName === tag) return n;
  for (const c of n.childNodes ?? []) {
    const hit = findTag(c, tag);
    if (hit) return hit;
  }
  return null;
};

/* ------------------------------------------------------------------ report -- */

const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html'));
let totalStrict = 0;
let totalLoose = 0;
const rows = [];

for (const [slug, markup] of Object.entries(rendered)) {
  const file = files.find((f) => f.startsWith(slugToFile.get(slug) + '_'));
  const original = findTag(parse5.parse(fs.readFileSync(path.join(HTML_DIR, file), 'utf8')), 'body');
  const actual = parse5.parseFragment(markup);

  const compare = (keepWhitespace) => {
    const a = flatten(original, 0, [], keepWhitespace);
    const b = flatten(actual, 0, [], keepWhitespace);
    const diffs = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const x = a[i];
      const y = b[i];
      const key = (n) => (n ? `${n.depth}:${n.kind}:${n.value}` : '—');
      if (key(x) !== key(y)) {
        diffs.push({ i, stitch: key(x), react: key(y), whitespace: key(x).endsWith(':·') || key(y).endsWith(':·') });
      }
      if (diffs.length > 6) break;
    }
    return { count: a.length, diffs };
  };

  const loose = compare(false);
  totalLoose += loose.diffs.length;

  // Whitespace-only text nodes the converter dropped because their box discards
  // them (flex/grid children, or whitespace between two block-level siblings).
  const ws = (node) => flatten(node, 0, [], true).filter((n) => n.value === '·').length;
  const dropped = ws(original) - ws(actual);
  totalStrict += dropped;
  rows.push({ slug, nodes: loose.count, loose: loose.diffs, dropped });
}

for (const r of rows) {
  const flag = r.loose.length ? `DIFF (${r.loose.length})` : 'identical';
  console.log(
    `${r.slug.padEnd(20)} ${String(r.nodes).padStart(5)} nodes  ${flag.padEnd(12)} ${r.dropped} inert whitespace nodes dropped`,
  );
  for (const d of r.loose.slice(0, 4)) {
    console.log(`    #${d.i}\n      stitch: ${d.stitch.slice(0, 160)}\n      react : ${d.react.slice(0, 160)}`);
  }
}
console.log(`\nelement / attribute / text mismatches across all screens: ${totalLoose}`);
console.log(`inert whitespace-only text nodes dropped: ${totalStrict}`);
process.exitCode = totalLoose === 0 ? 0 : 1;
