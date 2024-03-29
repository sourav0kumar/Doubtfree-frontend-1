/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lightGray: '#99AAB5',
                slateLight: '#2C2F33',
                slateDark: '#23272A',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}