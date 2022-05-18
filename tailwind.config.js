module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#003e1f',
                    secondary: '#01130b',
                    accent: '#d5f2e3'                    ,
                    neutral: '#73ba9b',
                },
            },
        ],
    },
};
