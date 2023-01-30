/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald"],
                robotoSlab: ["Roboto Slab"],
            },
            backgroundImage: {
                wave: "url('images/layered-waves-haikei.svg')",
            },
            colors: {
                "dark-navy": "#001220",
            },
            spacing: {
                128: "32rem",
                256: "64rem",
                192: "48rem",
            },
            aspectRatio: {
                banner: "960 / 300",
            },
        },
    },
    plugins: [],
};
