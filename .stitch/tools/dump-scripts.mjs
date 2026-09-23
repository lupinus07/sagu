import fs from 'node:fs';
import path from 'node:path';

const HTML_DIR = path.resolve('C:/00.Project/saju/.stitch/html');
const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html')).sort();
let out = '';
for (const f of files) {
  const src = fs.readFileSync(path.join(HTML_DIR, f), 'utf8');
  for (const s of src.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*id="tailwind-config")[^>]*>([\s\S]*?)<\/script>/g)) {
    const code = s[1].trim();
    if (code) out += `\n/* ===== ${f} ===== */\n${code}\n`;
  }
}
fs.writeFileSync(path.resolve('C:/00.Project/saju/.stitch/out/inline-scripts.js'), out);
console.log('bytes', out.length);
