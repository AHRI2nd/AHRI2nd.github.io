import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "ARIS Blog",
	subtitle: "Tsukimori Ahri's",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/Lofi-background-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pikswell", // Credit text to be displayed
			url: "https://www.deviantart.com/pikswell/art/Lofi-Anime-Wallpaper-952724903", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon.svg",
		},
		{
			src: "/favicon/favicon-96x96.png",
			sizes: "96x96",
		},
		{
			src: "/favicon/web-app-manifest-192x192.png",
			sizes: "192x192",
		},
		{
			src: "/favicon/web-app-manifest-512x512.png",
			sizes: "512x512",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/AHRI2nd", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Profile-Image.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Tsukimori Ahri",
	bio: "Charmed, I'm Sure (:",
	links: [
		{
			name: "X",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/Tsukimori_Ahri",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/AHRI2nd/",
		},
		{
			name: "email",
			icon: "material-symbols:mail",
			url: "mailto:tsukimori@ahri2nd.xyz",
		},
	],
};

export const giscusConfig: GiscusConfig = {
	enable: true,
	repo: "AHRI2nd/AHRI2nd.github.io",
	repoId: "R_kgDOR7tC_A",
	category: "Comments",
	categoryId: "DIC_kwDOR7tC_M4C630-",
	mapping: "pathname",
	reactionsEnabled: true,
	inputPosition: "bottom",
	lang: "ko",
	lightTheme: "catppuccin_latte",
	darkTheme: "catppuccin_mocha",
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
