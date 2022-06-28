/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#84cc16",
                    secondary: "#1e3a8a",
                    accent: "#fde68a",
                    neutral: "#1f2937",
                    "base-100": "#111827",
                    info: "#38bdf8",
                    success: "#4ade80",
                    warning: "#fbbf24",
                    error: "#f87171",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
