/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				'custom': 'repeat(4, minmax(0, 1fr))'
			},
			gridTemplateRows: {
				'custom': 'repeat(2, minmax(0, 1fr))'
			},
			gridColumn: {
				'span-2': 'span 2 / span 2',
			},
			gridRow: {
				'span-2': 'span 2 / span 2',
			}
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
