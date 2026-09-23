// Extracts the union of all Stitch tailwind configs + inventories remote assets.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const HTML_DIR = path.resolve('C:/00.Project/saju/.stitch/html');
const OUT_DIR = path.resolve('C:/00.Project/saju/.stitch/out');
fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html')).sort();

const merged = { colors: {}, borderRadius: {}, spacing: {}, fontFamily: {}, fontSize: {} };
const conflicts = [];
const assets = new Map(); // url -> [files]
const bodyClasses = new Set();
const inlineScripts = new Map();

for (const f of files) {
  const src = fs.readFileSync(path.join(HTML_DIR, f), 'utf8');

  const m = src.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
  if (m) {
    const sandbox = { tailwind: {} };
    vm.createContext(sandbox);
    vm.runInContext(m[1], sandbox);
    const ext = sandbox.tailwind.config?.theme?.extend ?? {};
    for (const group of Object.keys(merged)) {
      for (const [k, v] of Object.entries(ext[group] ?? {})) {
        const prev = merged[group][k];
        const nv = JSON.stringify(v);
        if (prev !== undefined && JSON.stringify(prev) !== nv) {
          conflicts.push({ file: f, group, key: k, was: prev, now: v });
        }
        merged[group][k] = v;
      }
    }
  }

  for (const u of src.matchAll(/https:\/\/lh3\.googleusercontent\.com\/[^"'\s)]+/g)) {
    if (!assets.has(u[0])) assets.set(u[0], []);
    assets.get(u[0]).push(f);
  }

  const bm = src.match(/<body([^>]*)>/);
  if (bm) bodyClasses.add((bm[1].match(/class="([^"]*)"/) || [, ''])[1]);

  for (const s of src.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*id="tailwind-config")[^>]*>([\s\S]*?)<\/script>/g)) {
    const code = s[1].trim();
    if (code) inlineScripts.set(f, (inlineScripts.get(f) || []).concat(code));
  }
}

const sortObj = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
for (const g of Object.keys(merged)) merged[g] = sortObj(merged[g]);

fs.writeFileSync(path.join(OUT_DIR, 'theme.json'), JSON.stringify(merged, null, 2));
fs.writeFileSync(
  path.join(OUT_DIR, 'report.json'),
  JSON.stringify(
    {
      conflicts,
      bodyClasses: [...bodyClasses],
      assets: [...assets.entries()].map(([url, f]) => ({ url, files: f })),
      inlineScripts: [...inlineScripts.entries()].map(([f, c]) => ({ file: f, count: c.length })),
    },
    null,
    2,
  ),
);

console.log('token counts:', Object.fromEntries(Object.entries(merged).map(([k, v]) => [k, Object.keys(v).length])));
console.log('conflicts:', conflicts.length);
conflicts.slice(0, 20).forEach((c) => console.log('  ', c.file, c.group, c.key, JSON.stringify(c.was), '->', JSON.stringify(c.now)));
console.log('distinct remote assets:', assets.size);
console.log('distinct body classes:', bodyClasses.size);
[...bodyClasses].forEach((b) => console.log('  body:', b));
console.log('files with inline scripts:', inlineScripts.size);
