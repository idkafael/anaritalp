import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    pink: '#db1f85',
                    darkPink: '#a61362',
                    offWhite: '#FFF0F5',
                    black: '#0A0A0A'
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(219, 31, 133, 0.4)',
                'glow-lg': '0 0 60px -10px rgba(219, 31, 133, 0.6)',
                'glow-white': '0 0 40px -10px rgba(255, 255, 255, 0.2)',
            }
        },
    },
    plugins: [],
};
export default config;
