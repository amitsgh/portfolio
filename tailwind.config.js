/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "@/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderColor: {
                primary: "var(--gray-12)",
                secondary: "var(--gray-11)",
                tertiary: "var(--gray-9)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradinet-4":
                    "linear-gradient(to right, var(--red-7), var(--blue-7), var(--yellow-7), var(--green-7)) 1",
            },
            textColor: {
                primary: "var(--gray-12)",
                secondary: "var(--gray-11)",
                tertiary: "var(--gray-9)",
            },
            fontFamily: {
                sans: ["var(--font-neue-montreal)", "system-ui", "sans-serif"],
                mono: ["var(--font-inter)", "monospace"],
            },
            backgroundColor: {
                contrast: "var(--contrast-color)",
                primary: "var(--gray-1)",
                secondary: "var(--gray-3)",
                tertiary: "var(--gray-5)",
            },
            keyframes: {
                in: {
                    "0%": { transform: "translateY(18px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
                "in-reverse": {
                    "0%": { transform: "translateY(-18px)", opacity: 0 },
                    "100%": { transform: "translateY(0px)", opacity: 1 },
                },
            },
            animation: {
                in: "in .6s both",
                "in-reverse": "in-reverse .6s both",
            },
        },
    },
};
