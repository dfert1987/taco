/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            lettuce: '#41a332',
            darkLettuce: '#004B00',
            darkestLettuce: '#001E00',
            shellLight: '#f6c95c',
            shellDark: '#e7af00',
            salsa: '#c91919',
            beef: '#983d00',
            white: 'white',
            inactive: '#d3d3d3',
            lightGrey: '#e0e0e0',
            darkGray: '#808080',
            warning: '#dc2626',
            warningHover: '#dc2626'
        },
        dropShadow: {
            nav: '0 35px 35px #c91919',
        },
        fontFamily: {
            bebas: 'Bebas Neue, sans-serif',
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
