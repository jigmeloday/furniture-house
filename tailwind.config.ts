import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: [ "class" ],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#ffffff',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#B88E2F',
                    foreground: '#ffffff',
                    light: '#FFF3E3',
                    lighter: '#FCF8F3',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                typo: {
                    dark: '#333333'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                danger: '#E84B3C',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            backgroundImage: {
                'cover-section': "url('/images/cover.webp')",
                'banner': "url('/images/banner.webp')",
            }
        }
    },
    plugins: [ require( "tailwindcss-animate" ) ],
};
export default config;
