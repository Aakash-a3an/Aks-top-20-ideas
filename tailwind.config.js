module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust the paths as necessary
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'coffee',
      'luxury',
      'wireframe',
      'lemonade',
      'retro',
      'emerald',
      'valentine',
      'cyberpunk',
      'dim',
    ],
  },
};
