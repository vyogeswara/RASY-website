import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            // Cyber grid template for the specific layout
            gridTemplateColumns: {
                'cyber': 'repeat(2, minmax(0, 1fr))',
            },
            // Ensure these colors match the theme
            colors: {
                blue: {
                    900: '#1e3a8a',
                    600: '#2563eb',
                    500: '#3b82f6',
                },
                zinc: {
                    900: '#18181b',
                    400: '#a1a1aa',
                }
            }
        },
    },
    plugins: [],
};

export default config;
