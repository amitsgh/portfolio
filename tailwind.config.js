/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			textColor: {
				primary: "var(--gray-12)",
				secondary: "var(--gray-11)",
				tertiary: "var(--gray-9)",
				link: "var(--blue-11)",
			},
			fontFamily: {
				sans: ["var(--font-neue-montreal)", "system-ui", "sans-serif"],
				mono: ["var(--font-inter)", "monospace"],
			},
			backgroundColor: {
				contrast: "var(--contrast-color)",
				primary: "var(--gray-1)",
				secondary: "var(--gray-2)",
				tertiary: "var(--gray-3)",
			},
		},
	},
	plugins: [],
};
