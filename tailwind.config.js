/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
           
        },
        colors: {
            lettuce: '#41a332',
            shellLight: '#f6c95c',
            shellDark: '#e7af00',
            salsa: '#c91919',
            beef: '#983d00',
            white: 'white',
        },
        dropShadow: {
            nav: '0 35px 35px #c91919'
        },
        fontFamily: {
            bebas: 'Bebas Neue, sans-serif',
        }
    },
    plugins: [],
};
