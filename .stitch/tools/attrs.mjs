import fs from 'node:fs';
import path from 'node:path';
import * as parse5 from 'parse5';

const HTML_DIR = path.resolve('C:/00.Project/saju/.stitch/html');
const names = new Map();
const tags = new Map();

const walk = (n) => {
  if (n.tagName) {
    tags.set(n.tagName, (tags.get(n.tagName) || 0) + 1);
    for (const a of n.attrs ?? []) {
      const key = (a.prefix ? a.prefix + ':' : '') + a.name;
      if (!names.has(key)) names.set(key, new Set());
      names.get(key).add(n.tagName);
    }
  }
  for (const c of n.childNodes ?? []) walk(c);
};

for (const f of fs.readdirSync(HTML_DIR).filter((x) => x.endsWith('.html'))) {
  walk(parse5.parse(fs.readFileSync(path.join(HTML_DIR, f), 'utf8')));
}

console.log('--- tags ---');
console.log([...tags.entries()].sort((a, b) => b[1] - a[1]).map(([t, c]) => `${t}:${c}`).join('  '));
console.log('--- attributes ---');
for (const [k, v] of [...names.entries()].sort()) console.log(`${k}  ->  ${[...v].join(',')}`);
