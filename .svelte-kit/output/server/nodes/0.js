import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.olUjyXL-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CrxYP7m3.js","_app/immutable/chunks/DIyW9u6C.js","_app/immutable/chunks/Be6iPSgw.js","_app/immutable/chunks/WmWeCZAL.js","_app/immutable/chunks/BUR1RtEt.js","_app/immutable/chunks/DivJ8TVj.js","_app/immutable/chunks/BPEndtsl.js"];
export const stylesheets = ["_app/immutable/assets/0.EdOrhXoC.css"];
export const fonts = [];
