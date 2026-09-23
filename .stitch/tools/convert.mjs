/**
 * Converts the HTML Stitch exported for the "AI Saju Fortune App" project into
 * React screen components, preserving the markup character for character.
 *
 *   node .stitch/tools/convert.mjs
 *
 * What it does per screen:
 *   - parses the exported HTML with parse5 (same tree the browser builds)
 *   - serialises <body>'s children back out as JSX, mapping attribute names to
 *     their React spelling and keeping every class string byte identical
 *   - rewrites the googleusercontent image URLs to the copies under public/assets
 *   - splits the inline <script> into module-scope function declarations (the
 *     ones the onclick="" attributes call) and a mount effect for the rest
 */
import fs from 'node:fs';
import path from 'node:path';
import * as parse5 from 'parse5';

const ROOT = path.resolve('C:/00.Project/saju');
const HTML_DIR = path.join(ROOT, '.stitch/html');
const OUT_DIR = path.join(ROOT, 'src/screens');
const ASSET_MAP = JSON.parse(
  fs.readFileSync(path.join(ROOT, '.stitch/out/assets.json'), 'utf8').replace(/^﻿/, ''),
);

/** Screen id -> route slug + component name. Order drives the gallery index. */
const SCREENS = [
  { file: '06', name: 'Splash', slug: 'splash', title: '스플래시' },
  { file: '03', name: 'Login', slug: 'login', title: '로그인' },
  { file: '16', name: 'LoginSheet', slug: 'login-sheet', title: '로그인 바텀시트' },
  { file: '17', name: 'TermsAgreement', slug: 'terms', title: '약관 동의' },
  { file: '05', name: 'SignupComplete', slug: 'signup-complete', title: '가입 완료' },
  { file: '21', name: 'HomeGuest', slug: 'home-guest', title: '홈 (비로그인)' },
  { file: '22', name: 'Home', slug: 'home', title: '홈' },
  { file: '13', name: 'SajuInput', slug: 'saju-input', title: '사주 정보 입력' },
  { file: '10', name: 'SajuOptions', slug: 'saju-options', title: '사주 계산 옵션' },
  { file: '23', name: 'SajuResult', slug: 'saju-result', title: '사주 분석 결과' },
  { file: '15', name: 'DaeunFlow', slug: 'daeun-flow', title: '대운 흐름 분석' },
  { file: '24', name: 'SavedSaju', slug: 'saved-saju', title: '저장된 사주' },
  { file: '14', name: 'AiChat', slug: 'ai-chat', title: '사주 AI 상담' },
  { file: '02', name: 'ReportStore', slug: 'store', title: '프리미엄 리포트 스토어' },
  { file: '09', name: 'Checkout', slug: 'checkout', title: '결제하기' },
  { file: '20', name: 'ReportLoading', slug: 'report-loading', title: '리포트 생성 중' },
  { file: '07', name: 'CareerMoveReport', slug: 'report-career-move', title: '이직운 리포트' },
  { file: '12', name: 'More', slug: 'more', title: '더보기' },
  { file: '11', name: 'AccountDelete', slug: 'account-delete', title: '회원 탈퇴' },
  { file: '04', name: 'ReportFailed', slug: 'report-failed', title: '리포트 생성 실패' },
  { file: '08', name: 'NetworkError', slug: 'network-error', title: '네트워크 오류' },
  { file: '19', name: 'NotFound', slug: 'not-found', title: '페이지를 찾을 수 없음' },
];

/* ------------------------------------------------------------------ attrs -- */

const RENAME = {
  class: 'className',
  for: 'htmlFor',
  charset: 'charSet',
  crossorigin: 'crossOrigin',
  autocomplete: 'autoComplete',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  inputmode: 'inputMode',
  enctype: 'encType',
  novalidate: 'noValidate',
  autofocus: 'autoFocus',
  srcset: 'srcSet',
  usemap: 'useMap',
  datetime: 'dateTime',
  playsinline: 'playsInline',
  allowfullscreen: 'allowFullScreen',
  frameborder: 'frameBorder',
  referrerpolicy: 'referrerPolicy',
  hreflang: 'hrefLang',
};

/** Attributes rendered as a bare JSX flag when present with an empty value. */
const BOOLEAN = new Set([
  'disabled', 'checked', 'selected', 'required', 'multiple', 'hidden', 'open',
  'readonly', 'autofocus', 'novalidate', 'loop', 'muted', 'controls', 'reversed',
  'allowfullscreen', 'playsinline', 'default', 'itemscope',
]);

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

/** parse5 leaves these SVG element names lowercased; React wants the spec casing. */
const SVG_TAG_FIX = { fedropshadow: 'feDropShadow', fegaussianblur: 'feGaussianBlur', feoffset: 'feOffset', femerge: 'feMerge', femergenode: 'feMergeNode', feblend: 'feBlend', fecolormatrix: 'feColorMatrix', feflood: 'feFlood', fecomposite: 'feComposite' };

const camel = (s) => s.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase());

const reactAttrName = (name) => {
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  if (RENAME[name]) return RENAME[name];
  if (name.startsWith('on')) return 'on' + name[2].toUpperCase() + name.slice(3);
  if (name.includes('-') || name.includes(':')) return camel(name);
  return name;
};

const styleToObject = (css) => {
  const entries = [];
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith('--') ? JSON.stringify(prop) : camel(prop);
    entries.push(`${key}: ${JSON.stringify(value)}`);
  }
  return `{ ${entries.join(', ')} }`;
};

/* ---------------------------------------------------------------- handlers -- */

/** `onclick="selectOption('yaja')"` -> `onClick={() => selectOption('yaja')}` */
const handlerToJsx = (code) => {
  const usesThis = /\bthis\b/.test(code);
  const usesEvent = /\bevent\b/.test(code);
  const body = code.replace(/\bthis\b/g, 'event.currentTarget').trim().replace(/;$/, '');
  const param = usesThis || usesEvent ? 'event' : '';
  return `(${param}) => ${/[;{]/.test(body) ? `{ ${body} }` : body}`;
};

/* -------------------------------------------------------------- serialiser -- */

const assetByUrl = new Map(ASSET_MAP.map((a) => [a.url, `/assets/${a.local}`]));
const rewriteUrl = (v) => assetByUrl.get(v) ?? v;

const PRESERVE_WS = new Set(['pre', 'textarea']);

/** Default-inline HTML elements; anything else is treated as block-level. */
const INLINE_TAGS = new Set([
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'button', 'cite', 'code', 'data', 'del',
  'dfn', 'em', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'mark', 'output', 'picture',
  'q', 's', 'samp', 'select', 'small', 'span', 'strong', 'sub', 'sup', 'svg',
  'textarea', 'time', 'u', 'var', 'wbr',
]);

const classList = (node) =>
  ((node.attrs ?? []).find((a) => a.name === 'class')?.value ?? '').split(/\s+/).filter(Boolean);

const isInlineLevel = (node) => {
  if (!node) return false;
  if (node.nodeName === '#text') return true;
  if (!node.tagName) return false;
  const classes = classList(node);
  if (classes.some((c) => c === 'block' || c === 'flex' || c === 'grid' || c === 'table' || c === 'hidden')) {
    return false;
  }
  if (classes.some((c) => c.startsWith('inline'))) return true;
  return INLINE_TAGS.has(node.tagName);
};

/** Whitespace-only children of a flex or grid box are never rendered. */
const dropsWhitespace = (node) =>
  classList(node).some((c) => c === 'flex' || c === 'grid' || c === 'inline-flex' || c === 'inline-grid');

const escapeText = (s) => (/[{}<>]/.test(s) ? `{${JSON.stringify(s)}}` : s);

/**
 * HTML collapses runs of whitespace to one space. A text node becomes one line,
 * with `{" "}` standing in for leading/trailing whitespace that JSX would swallow
 * but the browser would have rendered — which is only where an inline-level
 * sibling sits next to it inside a box that does not discard whitespace.
 */
const textChunk = (raw, { preserve, prev, next, drops }) => {
  if (preserve) return `{${JSON.stringify(raw)}}`;
  if (raw === '') return null;
  if (/^\s+$/.test(raw)) {
    if (drops) return null;
    return isInlineLevel(prev) && isInlineLevel(next) ? '{" "}' : null;
  }
  const lead = !drops && /^\s/.test(raw) && isInlineLevel(prev) ? '{" "}' : '';
  const trail = !drops && /\s$/.test(raw) && isInlineLevel(next) ? '{" "}' : '';
  return lead + escapeText(raw.replace(/\s+/g, ' ').trim()) + trail;
};

const warnings = [];

function serialize(node, depth, ctx) {
  const pad = '  '.repeat(depth);

  if (node.nodeName === '#comment') {
    return `${pad}{/* ${node.data.trim().replace(/\*\//g, '*\\/')} */}`;
  }

  const tag = SVG_TAG_FIX[node.tagName] ?? node.tagName;
  const attrs = [];
  let forcedChildren = null;

  for (const a of node.attrs ?? []) {
    let name = (a.prefix ? `${a.prefix}:${a.name}` : a.name);
    let value = a.value;

    if (name === 'src' || name === 'href') value = rewriteUrl(value);

    // React owns the value of a form control, so seed it as a default instead.
    if (name === 'value' && (tag === 'input' || tag === 'textarea')) name = 'defaultvalue';
    if (name === 'checked' && tag === 'input') name = 'defaultchecked';
    // React takes the pre-selected option as `defaultValue` on the <select>.
    if (name === 'selected' && tag === 'option') continue;

    if (name === 'style') {
      attrs.push(`style={${styleToObject(value)}}`);
      continue;
    }
    if (/^on[a-z]+$/.test(name)) {
      attrs.push(`${reactAttrName(name)}={${handlerToJsx(value)}}`);
      continue;
    }
    if (name === 'defaultvalue') {
      attrs.push(`defaultValue=${JSON.stringify(value)}`);
      continue;
    }
    if (name === 'defaultchecked') {
      attrs.push('defaultChecked');
      continue;
    }
    if (value === '' && BOOLEAN.has(name)) {
      attrs.push(reactAttrName(name));
      continue;
    }
    if (name === 'rows' || name === 'cols' || name === 'size') {
      attrs.push(`${name}={${Number(value)}}`);
      continue;
    }
    const jsxName = reactAttrName(name);
    if (/[^A-Za-z0-9-]/.test(jsxName)) warnings.push(`odd attribute ${name} on <${tag}>`);
    attrs.push(value.includes('"') ? `${jsxName}={${JSON.stringify(value)}}` : `${jsxName}="${value}"`);
  }

  if (tag === 'select') {
    const chosen = (function find(n) {
      for (const c of n.childNodes ?? []) {
        if (c.tagName === 'option' && (c.attrs ?? []).some((a) => a.name === 'selected')) return c;
        const nested = find(c);
        if (nested) return nested;
      }
      return null;
    })(node);
    if (chosen) {
      const value = (chosen.attrs ?? []).find((a) => a.name === 'value')?.value
        ?? (chosen.childNodes ?? []).map((c) => c.value ?? '').join('').trim();
      attrs.push(`defaultValue=${JSON.stringify(value)}`);
    }
  }

  // <textarea>text</textarea> is a defaultValue in React.
  if (tag === 'textarea') {
    const text = (node.childNodes ?? []).map((c) => c.value ?? '').join('');
    if (text) attrs.push(`defaultValue=${JSON.stringify(text)}`);
    forcedChildren = [];
  }

  const open = attrs.length ? `<${tag} ${attrs.join(' ')}` : `<${tag}`;
  const children = forcedChildren ?? (node.childNodes ?? []);
  const preserve = ctx.preserve || PRESERVE_WS.has(tag);

  const drops = dropsWhitespace(node);
  const meaningful = children.filter((c) => c.nodeName !== '#comment' && c.tagName !== 'script' && c.tagName !== 'style');

  const chunks = [];
  for (const child of children) {
    if (child.nodeName === '#text') {
      const at = meaningful.indexOf(child);
      const c = textChunk(child.value, {
        preserve,
        drops,
        prev: meaningful[at - 1],
        next: meaningful[at + 1],
      });
      if (c !== null) chunks.push({ inline: c, text: true });
    } else if (child.nodeName === '#comment') {
      chunks.push({ block: serialize(child, depth + 1, ctx) });
    } else if (child.tagName === 'script' || child.tagName === 'style') {
      continue;
    } else {
      chunks.push({ block: serialize(child, depth + 1, { ...ctx, preserve }) });
    }
  }

  if (chunks.length === 0) {
    return VOID.has(tag) || !node.childNodes ? `${pad}${open} />` : `${pad}${open} />`;
  }

  // A lone text child stays on one line.
  if (chunks.length === 1 && chunks[0].text) {
    const line = `${pad}${open}>${chunks[0].inline}</${tag}>`;
    if (line.length <= 120 || !attrs.length) return line;
  }

  const body = chunks
    .map((c) => (c.block !== undefined ? c.block : `${'  '.repeat(depth + 1)}${c.inline}`))
    .join('\n');
  const openLine = attrs.length > 3 && open.length > 110
    ? `${pad}<${tag}\n${attrs.map((a) => `${pad}  ${a}`).join('\n')}\n${pad}>`
    : `${pad}${open}>`;
  return `${openLine}\n${body}\n${pad}</${tag}>`;
}

/* ------------------------------------------------------------------ script -- */

/**
 * Routes the scripts' DOM lookups through the helpers in src/lib/dom.ts, which is
 * the only rewrite applied to the ported code — it keeps the imperative style
 * intact while giving TypeScript one element type to work with.
 */
const useDomHelpers = (code) =>
  code
    .replace(/\bdocument\.getElementById\(/g, 'byId(')
    .replace(/\bdocument\.querySelectorAll\(/g, 'queryAll(')
    .replace(/\bdocument\.querySelector\(/g, 'query(')
    .replace(/\b([A-Za-z_$][\w$]*)\.querySelectorAll\(([^()]*)\)/g, 'queryAll($2, $1)')
    .replace(/\b([A-Za-z_$][\w$]*)\.querySelector\(([^()]*)\)/g, 'query($2, $1)');

/** Splits a script into its top-level statements, keeping each one verbatim. */
function topLevelUnits(src) {
  const units = [];
  let depth = 0;
  let inStr = null;
  let inLineComment = false;
  let start = 0;

  const push = (end) => {
    const code = src.slice(start, end);
    if (code.trim()) units.push(code);
    start = end;
  };

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    const prev = src[i - 1];
    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inStr) {
      if (ch === inStr && prev !== '\\') inStr = null;
      continue;
    }
    if (ch === '/' && src[i + 1] === '/') { inLineComment = true; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '{' || ch === '(' || ch === '[') depth++;
    else if (ch === '}' || ch === ')' || ch === ']') {
      depth--;
      if (depth === 0 && ch === '}') {
        let j = i + 1;
        while (src[j] === ';' || src[j] === ')' || src[j] === '(') j++;
        push(j);
        i = j - 1;
      }
    } else if (ch === ';' && depth === 0) push(i + 1);
  }
  push(src.length);
  return units;
}

/**
 * Splits an inline script into the declarations the markup's onclick="" attributes
 * need at module scope (plus whatever those transitively reach) and the statements
 * that wire up the DOM, which belong in a mount effect.
 */
function splitScript(code, handlerNames) {
  let src = useDomHelpers(code.trim());
  const iife = src.match(/^\(function\s*\(\s*\)\s*\{([\s\S]*)\}\s*\)\s*\(\s*\)\s*;?$/);
  if (iife) src = iife[1].trim();

  const units = topLevelUnits(src).map((raw) => {
    const code = raw.replace(/^\s*\n/, '').replace(/\s+$/, '');
    const fn = code.match(/^\s*(?:\/\/[^\n]*\n\s*)*(?:window\.)?(?:function\s+)?([A-Za-z_$][\w$]*)\s*(?:=\s*function\s*)?\(/);
    const decl = code.match(/^\s*(?:\/\/[^\n]*\n\s*)*(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/);
    const isFn = /^\s*(?:\/\/[^\n]*\n\s*)*(?:function\s+|window\.[A-Za-z_$][\w$]*\s*=\s*function)/.test(code);
    return {
      code: code.replace(/^(\s*)window\.([A-Za-z_$][\w$]*)\s*=\s*function\s*\(/, '$1function $2('),
      name: isFn ? fn?.[1] : decl?.[1],
      touchesDom: /\bdocument\b|\b(?:byId|query|queryAll)\(|\bwindow\.(?!history)/.test(code),
      isDecl: isFn || Boolean(decl),
    };
  });

  const named = new Map(units.filter((u) => u.name && u.isDecl).map((u) => [u.name, u]));
  const needed = new Set();
  const want = (name) => {
    const u = named.get(name);
    if (!u || needed.has(name)) return;
    // A `const x = document.getElementById(...)` cannot move to module scope.
    if (!/^\s*(?:\/\/[^\n]*\n\s*)*function\s/.test(u.code) && u.touchesDom) return;
    needed.add(name);
    for (const m of u.code.matchAll(/\b([A-Za-z_$][\w$]*)\s*[({[.]/g)) want(m[1]);
    for (const m of u.code.matchAll(/\b([A-Za-z_$][\w$]*)\b/g)) if (named.has(m[1])) want(m[1]);
  };
  for (const h of handlerNames) want(h);

  const hoisted = [];
  const rest = [];
  for (const u of units) {
    if (u.name && needed.has(u.name)) hoisted.push({ name: u.name, code: u.code.trim() });
    else rest.push(u.code);
  }
  return { hoisted, effect: rest.join('\n').trim() };
}

const dedent = (code) => {
  const lines = code.split('\n');
  const indents = lines.slice(1).filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l, idx) => (idx === 0 ? l : l.slice(min))).join('\n');
};

const reindent = (code, pad) => dedent(code).split('\n').map((l) => (l.trim() ? pad + l : '')).join('\n');

/* -------------------------------------------------------------------- main -- */

fs.mkdirSync(OUT_DIR, { recursive: true });
const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html'));
const registry = [];

for (const screen of SCREENS) {
  const file = files.find((f) => f.startsWith(screen.file + '_'));
  if (!file) throw new Error(`no html for ${screen.name}`);
  const html = fs.readFileSync(path.join(HTML_DIR, file), 'utf8');
  const doc = parse5.parse(html);

  const findTag = (n, tag) => {
    if (n.tagName === tag) return n;
    for (const c of n.childNodes ?? []) {
      const hit = findTag(c, tag);
      if (hit) return hit;
    }
    return null;
  };
  const body = findTag(doc, 'body');
  const bodyClass = (body.attrs ?? []).find((a) => a.name === 'class')?.value ?? '';

  const scripts = [];
  const collectScripts = (n) => {
    if (n.tagName === 'script' && !(n.attrs ?? []).some((a) => a.name === 'src' || a.value === 'tailwind-config')) {
      const code = (n.childNodes ?? []).map((c) => c.value ?? '').join('').trim();
      if (code) scripts.push(code);
    }
    for (const c of n.childNodes ?? []) collectScripts(c);
  };
  collectScripts(body);

  const ctx = { preserve: false };
  const jsx = (body.childNodes ?? [])
    .filter((n) => n.nodeName !== '#text' || n.value.trim())
    .filter((n) => n.tagName !== 'script')
    .map((n) => serialize(n, 3, ctx))
    .join('\n');

  // Names the markup's inline handlers call; those declarations must be module scope.
  const handlerNames = new Set();
  for (const m of html.matchAll(/\son[a-z]+="([^"]*)"/g)) {
    for (const call of m[1].matchAll(/\b([A-Za-z_$][\w$]*)\s*\(/g)) handlerNames.add(call[1]);
  }

  const parts = scripts.map((s) => splitScript(s, handlerNames));
  const hoisted = parts.flatMap((p) => p.hoisted);
  const effects = parts.map((p) => p.effect).filter(Boolean);

  const scriptText = [...hoisted.map((h) => h.code), ...effects].join('\n');
  const helpers = ['byId', 'query', 'queryAll'].filter((h) => new RegExp(`\\b${h}\\(`).test(scriptText));

  const out = [];
  out.push(`/**`);
  out.push(` * ${screen.title} — imported from the Stitch export of "AI Saju Fortune App".`);
  out.push(` * Markup mirrors .stitch/html/${file} element for element; edit it here from now on.`);
  out.push(` */`);
  if (effects.length) out.push(`import { useEffect } from 'react';`);
  if (helpers.length) out.push(`import { ${helpers.join(', ')} } from '../lib/dom';`);
  out.push(`import { useBodyClass } from '../lib/useBodyClass';`);
  out.push('');
  out.push(`export const BODY_CLASS =\n  ${JSON.stringify(bodyClass)};`);
  out.push('');
  for (const h of hoisted) {
    out.push(dedent(h.code));
    out.push('');
  }
  out.push(`export default function ${screen.name}() {`);
  out.push(`  useBodyClass(BODY_CLASS);`);
  if (effects.length) {
    out.push('');
    out.push(`  useEffect(() => {`);
    for (const e of effects) out.push(reindent(e, '    '));
    out.push(`  }, []);`);
  }
  out.push('');
  out.push(`  return (`);
  out.push(`    <>`);
  out.push(jsx);
  out.push(`    </>`);
  out.push(`  );`);
  out.push(`}`);
  out.push('');

  fs.writeFileSync(path.join(OUT_DIR, `${screen.name}.tsx`), out.join('\n'), 'utf8');
  registry.push({ ...screen, hoisted: hoisted.map((h) => h.name), effects: effects.length });
}

const reg = [
  `/** Every screen Stitch produced for "AI Saju Fortune App", in flow order. */`,
  `import type { ComponentType } from 'react';`,
  '',
  ...registry.map((s) => `import ${s.name} from './${s.name}';`),
  '',
  `export type Screen = { slug: string; title: string; component: ComponentType };`,
  '',
  `export const screens: Screen[] = [`,
  ...registry.map((s) => `  { slug: '${s.slug}', title: ${JSON.stringify(s.title)}, component: ${s.name} },`),
  `];`,
  '',
];
fs.writeFileSync(path.join(OUT_DIR, 'registry.ts'), reg.join('\n'), 'utf8');

console.log(`wrote ${registry.length} screens`);
for (const s of registry) {
  console.log(`  ${s.name.padEnd(18)} hoisted=[${s.hoisted.join(',')}] effects=${s.effects}`);
}
if (warnings.length) console.log('warnings:', [...new Set(warnings)]);
