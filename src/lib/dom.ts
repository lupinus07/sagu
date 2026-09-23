/**
 * The inline scripts Stitch emits drive the markup imperatively — look an element
 * up by id or class, then set `className`, `innerHTML`, `disabled`, `value`. Those
 * scripts were ported as they were, so these helpers give their lookups a single
 * permissive element type instead of scattering casts through every line.
 *
 * Like the original `document.getElementById`, a miss returns null at runtime; the
 * ported code keeps whatever guards it already had.
 */
export type El = HTMLElement & HTMLInputElement & HTMLButtonElement & HTMLAnchorElement;

export const byId = (id: string) => document.getElementById(id) as unknown as El;

export const query = (selector: string, root: ParentNode = document) =>
  root.querySelector(selector) as unknown as El;

export const queryAll = (selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(selector)) as unknown as El[];
