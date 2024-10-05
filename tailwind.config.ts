import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			"hero-bg": "url('/background-images/hero-bg.png')"
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			"primary-green": "#6CB981",
			"secondary-green": "#48924F",
			"tertiary-green": "#0D4D14",
			"quartary-green": "#9FDEA9",
			"footer-green": "#324B29",
			"primary-grey": "#828282",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontSize: {
			"navbar": [
				"1.25rem",
				{
				  lineHeight: "1.375rem",
				  letterSpacing: "0",
				  fontWeight: "700",
				},
			],
			"primary-button": [
				"1.125rem",
				{
				  lineHeight: "1.6875rem",
				  letterSpacing: "0",
				  fontWeight: "700",
				},
			],
			"secondary-button": [
				"1.5rem",
				{
				  lineHeight: "2.25rem",
				  letterSpacing: "0",
				  fontWeight: "500",
				},
			],
			"hero-banner": [
				"1.125rem",
				{
				  lineHeight: "1.6875rem",
				  letterSpacing: "0",
				  fontWeight: "500",
				},
			],
			"hero-banner-mobile": [
				"0.875rem",
				{
				  lineHeight: "1.3125rem",
				  letterSpacing: "0",
				  fontWeight: "500",
				},
			],
			"hero-text": [
				"9rem",
				{
				  lineHeight: "8.75rem",
				  letterSpacing: "0",
				  fontWeight: "900",
				},
			],
			"hero-text-lg": [
				"7.75rem",
				{
				  lineHeight: "7.5rem",
				  letterSpacing: "0",
				  fontWeight: "900",
				},
			],
			"hero-text-md": [
				"6rem",
				{
				  lineHeight: "5.75rem",
				  letterSpacing: "0",
				  fontWeight: "900",
				},
			],
			"hero-text-mobile": [
				"2.25rem",
				{
				  lineHeight: "2rem",
				  letterSpacing: "0",
				  fontWeight: "900",
				},
			],
			"section-header": [
				"4rem",
				{
				  lineHeight: "6rem",
				  letterSpacing: "0",
				  fontWeight: "800",
				},
			],
			"section-header-mobile": [
				"2rem",
				{
				  lineHeight: "3rem",
				  letterSpacing: "0",
				  fontWeight: "800",
				},
			],
			"services-title": [
				"1rem",
				{
				  lineHeight: "1.5rem",
				  letterSpacing: "0",
				  fontWeight: "900",
				},
			],
			"services-description": [
				"0.875rem",
				{
				  lineHeight: "1.25rem",
				  letterSpacing: "0",
				  fontWeight: "400",
				},
			],
			"about-us": [
				"1.125rem",
				{
				  lineHeight: "1.5rem",
				  letterSpacing: "0",
				  fontWeight: "600",
				},
			],
			"testimonial-name": [
				"1.125rem",
				{
				  lineHeight: "1.375rem",
				  letterSpacing: "0",
				  fontWeight: "700",
				},
			],
			"testimonial-description": [
				"0.875rem",
				{
				  lineHeight: "1.375rem",
				  letterSpacing: "0",
				  fontWeight: "400",
				},
			],
			"contact-us": [
				"0.875rem",
				{
				  lineHeight: "1.3125rem",
				  letterSpacing: "0",
				  fontWeight: "500",
				},
			],
			
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
