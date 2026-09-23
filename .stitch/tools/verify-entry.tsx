/** Server-renders every screen so verify.mjs can diff it against the Stitch HTML. */
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screens } from '../../src/screens/registry';

const out: Record<string, string> = {};
for (const { slug, component } of screens) {
  // Screens may use router hooks (useNavigate etc.), so render inside a router.
  out[slug] = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(component)));
}
process.stdout.write(JSON.stringify(out));
