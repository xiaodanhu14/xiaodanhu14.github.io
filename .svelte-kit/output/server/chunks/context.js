var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
const noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
var ssr_context = null;
function set_ssr_context(v) {
  ssr_context = v;
}
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (ssr_context === null) {
    lifecycle_outside_component();
  }
  return ssr_context.c ??= new Map(get_parent_context(ssr_context) || void 0);
}
function push(fn) {
  ssr_context = { p: ssr_context, c: null, r: null };
}
function pop() {
  ssr_context = /** @type {SSRContext} */
  ssr_context.p;
}
function get_parent_context(ssr_context2) {
  let parent = ssr_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
export {
  array_from as a,
  safe_not_equal as b,
  deferred as c,
  define_property as d,
  escape_html as e,
  safe_equals as f,
  getContext as g,
  equals as h,
  is_array as i,
  array_prototype as j,
  get_descriptor as k,
  get_prototype_of as l,
  is_extensible as m,
  noop as n,
  object_prototype as o,
  index_of as p,
  set_ssr_context as q,
  run_all as r,
  setContext as s,
  ssr_context as t,
  push as u,
  pop as v
};
