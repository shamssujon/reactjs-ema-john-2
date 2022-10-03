/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
            },
        },
    },
    plugins: [],
};
