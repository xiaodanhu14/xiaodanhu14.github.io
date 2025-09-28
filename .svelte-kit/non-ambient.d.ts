
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/projects" | "/projects/[slug]" | "/publications";
		RouteParams(): {
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string };
			"/publications": Record<string, never>
		};
		Pathname(): "/" | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {} | "/publications" | "/publications/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/images/profile/picture-placeholder.md" | "/images/profile/README.md" | "/images/profile/xiaodan-hu.jpg" | "/images/projects/project-thumbnails-example.md" | "/images/projects/README.md" | "/images/projects/smart-dimming.png" | "/images/projects/soft-edge-demo.png" | "/images/projects/x-mask.jpg" | "/media/videos/README.md" | "/media/videos/video-files-example.md" | "/papers/ISMAR2025_X_Mask.pdf" | "/papers/pdf-files-example.md" | "/papers/README.md" | string & {};
	}
}