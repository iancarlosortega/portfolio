/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0E8388',
				secondary: '#2C3333',
				footer: '#2E4F4F',
				light: '#CBE4DE',
			},
		},
	},
	plugins: [],
};
