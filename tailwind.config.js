module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0c0a',
        panel: '#141613',
        paper: '#efe6d4',
        kraft: '#e4d8bf',
        signal: '#e23d2a',
        mint: '#3ee0a0',
        sand: '#c9b896',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Figtree', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
    },
  },
  plugins: [],
};
