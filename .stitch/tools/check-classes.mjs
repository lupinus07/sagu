/**
 * Stitch styled the export with the Tailwind CDN's runtime JIT; this project uses a
 * local Tailwind build of the same config. This checks that every class the markup
 * uses actually produced a rule in the built stylesheet, so nothing went missing in
 * the swap.
 *
 *   npm run build && node .stitch/tools/check-classes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('C:/00.Project/saju');
const cssFile = fs
  .readdirSync(path.join(ROOT, 'dist/assets'))
  .find((f) => f.endsWith('.css'));
if (!cssFile) throw new Error('run `npm run build` first');
const css = fs.readFileSync(path.join(ROOT, 'dist/assets', cssFile), 'utf8');

const tokens = new Set();
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.tsx')) {
      for (const m of fs.readFileSync(full, 'utf8').matchAll(/className="([^"]+)"/g)) {
        for (const c of m[1].split(/\s+/)) if (c) tokens.add(c);
      }
    }
  }
};
walk(path.join(ROOT, 'src'));

/** Tailwind escapes `:` `/` `.` `[` `]` `%` `#` `(` `)` `,` and a leading digit. */
const escapeClass = (c) => c.replace(/[.:/[\]%#(),!+&<>'"*=~$^{}|?@`\\]/g, (ch) => '\\' + ch);

/** Hooks the exported scripts query by, never meant to carry styles. */
const HOOKS = new Set([
  'group', 'peer', 'material-symbols-outlined',
  'open-detail-btn', 'payment-method-item', 'profile-chip', 'radio-indicator',
  'reason-card', 'report-card', 'sub-check-box', 'sub-check-label',
]);

/**
 * Classes Stitch wrote that Tailwind v3 has no utility for, so the CDN build it
 * was previewed against produced nothing for them either — keeping them means
 * keeping the export exactly as it was.
 */
const NO_OP_IN_V3 = new Set(['backdrop-blur-xs', 'h-13', 'py-0.2', 'no-scrollbar', 'scrollbar-none']);

const missing = [...tokens].filter((c) => !css.includes('.' + escapeClass(c)));
const hooks = missing.filter((c) => HOOKS.has(c));
const noops = missing.filter((c) => NO_OP_IN_V3.has(c));
const unexplained = missing.filter((c) => !HOOKS.has(c) && !NO_OP_IN_V3.has(c));

console.log(`class tokens used: ${tokens.size}`);
console.log(`with a rule in the built CSS: ${tokens.size - missing.length}`);
console.log(`behaviour hooks (no styling expected): ${hooks.length} — ${hooks.sort().join(', ')}`);
console.log(`no-ops in Tailwind v3, same as the CDN: ${noops.length} — ${noops.sort().join(', ')}`);
console.log(`unexplained: ${unexplained.length}`);
for (const c of unexplained.sort()) console.log(`  ${c}`);
process.exitCode = unexplained.length ? 1 : 0;
