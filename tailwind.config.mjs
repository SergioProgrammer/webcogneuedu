/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Helvetica Neue"', "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
			},
			colors: {
				background: "#f7f7f7",
				brand: "#0f0f0f",
			},
			boxShadow: {
				editorial: "0 20px 60px rgba(15, 15, 15, 0.08)",
			},
		},
	},
	plugins: [],
};
