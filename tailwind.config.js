module.exports = {
    mode: 'jit', // add this line
    content: ['./**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        backgroundColor: {
          'primary': '#374151',
          'secondary': '#374151',
          'accent': '#000000',
          'brand-bg': '#FCE44D',
        },
        textColor: {
          'primary': '#374151',
          'secondary': '#374151',
          'accent': '#000000',
        },
        fontFamily: {
          'brand': ['Comfortaa', 'sans-serif'],
        },
        boxShadow: { 
          'glow': '0 0 10px 0 #000000', 
        },
      },
    },
    variants: {},
    plugins: [],
  };
  