import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#0E8388",
				secondary: "#2C3333",
				footer: "#2E4F4F",
				light: "#CBE4DE",
			},
		},
	},
	plugins: [],
};

export default config;
