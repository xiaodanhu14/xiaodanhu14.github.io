export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/profile/picture-placeholder.md","images/profile/README.md","images/profile/xiaodan-hu.jpg","images/projects/project-thumbnails-example.md","images/projects/README.md","media/videos/README.md","media/videos/video-files-example.md","papers/pdf-files-example.md","papers/README.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.cpSINUqo.js",app:"_app/immutable/entry/app.nDduFRzH.js",imports:["_app/immutable/entry/start.cpSINUqo.js","_app/immutable/chunks/BPEndtsl.js","_app/immutable/chunks/DivJ8TVj.js","_app/immutable/chunks/DIyW9u6C.js","_app/immutable/entry/app.nDduFRzH.js","_app/immutable/chunks/DIyW9u6C.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DivJ8TVj.js","_app/immutable/chunks/C_iv_G2I.js","_app/immutable/chunks/BUR1RtEt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
