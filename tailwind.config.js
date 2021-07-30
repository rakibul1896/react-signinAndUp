module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aliceBlue: '#F4F9FD',
        buttonColor: '#EF5D14',
        headerPara: '#707070',
        border: '#E8EAEC',
        inputLogo: '#9BA2AC',
        authBorder: '#D8D8D8',
        authFacebook: '#3B5998',
        authGoogle: '#EE3158',
        profileColor: '#CFD2D7',
      },
      height: {
        50: '198px',
        '0.25': '1px',
      },
      width: {
        104: '27rem',
        100: '26rem',
        '54.25': '216.417px',
        '86.25': '344.41px',
        '182': '728px',
        '60%': '60%',
        '47%': '47%',
      },
      padding: {
        30: '120px',
      },
      margin: {
        
      },
      screens: {
        desktop: '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
       }
    },
  },
  variants: {
    extend: {
      inset: ['focus-within'],
    },
  },
  plugins: [],
};
