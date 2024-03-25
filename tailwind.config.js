/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"orange-400": "#FF6037",
				"pink-600": "#FF00CC",
			},
			fontFamily: {
				"single-day": ["Single Day", "sans-serif"],
				"mochiy-pop": ["Mochiy Pop One", "sans-serif"],
			},
		},
	},
	plugins: [],
};

