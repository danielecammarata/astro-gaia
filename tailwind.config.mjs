import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		transparent: "transparent",
		current: "currentColor",
		extend: {
			colors: {
				primary: "#0E0E0E",
				secondary: "#ECECEC",
				secondaryDark: "#D8D8D8",
				secondaryDarker: "#6C7072",
				socialBorder: "#4B4E4F",
				hoverBackground: "#1C1C1C",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				slideFromDownAndFade: {
					"0%": {
						opacity: "0",
						transform: "translateY(12px)",
						visibility: "hidden",
					},
					"1%": { visibility: "visible" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				"slide-from-down-and-fade-1":
					"slideFromDownAndFade 0.6s ease-in-out 0.1s both",
				"slide-from-down-and-fade-2":
					"slideFromDownAndFade 0.6s ease-in-out 0.2s both",
				"slide-from-down-and-fade-3":
					"slideFromDownAndFade 0.6s ease-in-out 0.3s both",
				"slide-from-down-and-fade-4":
					"slideFromDownAndFade 0.6s ease-in-out 0.4s both",
				"slide-from-down-and-fade-5":
					"slideFromDownAndFade 0.6s ease-in-out 0.5s both",
				"slide-from-down-and-fade-6":
					"slideFromDownAndFade 0.6s ease-in-out 0.6s both",
			},
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	plugins: [
		typography,
		require("@headlessui/tailwindcss"),
		require("tailwindcss-animate"),
	],
};
