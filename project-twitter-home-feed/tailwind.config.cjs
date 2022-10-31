/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      // Tamanhos: || 13 14 15 16 19 20
      sxs: 13, // Super extra small.
      xs: 14, // Extra small.
      sm: 15, // Small.
      md: 16, // Medium.
      lg: 19, // Large.
      xlg: 20, // Extra large.

    },
    fontWeight: {
      bold: 700,
      semibold: 500,
      900: 900,

    },
    colors: {
      'black': '#0F1419',
      'transparent': 'transparent',

      // Dark - Tons
      'dark-1': '#17202A',
      'dark-2': '#1C2733',
      'dark-3': '#283340',
      'dark-4': '#3A444C',
      'dark-5': '#5B7083',
      'dark-6': '#8899A6',
      'dark-7': '#EBEEF0',
      'dark-8': '#F7F9FA',
      // -----------

      'red': '#F4245E',
      'primary-blue': '#1DA1F2',
      'white': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
