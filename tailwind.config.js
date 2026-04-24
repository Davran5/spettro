export default {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}', './*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif']
      },
      colors: {
        spettro: {
          orange: '#FF5722',
          dark: '#050505',
          glass: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)'
        }
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 50%, #000000 100%)',
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
