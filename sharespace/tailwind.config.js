/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        google: [''],
      },
    },
    colors: {
      white: 'var(--color-white)',
      blue: 'var(--color-blue)',
      slate: 'var(--color-slate)',
      slater: 'var(--color-slater)',
      dark: 'var(--color-dark)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      bluehero: 'var(--color-bluehero)',
      goldhero: 'var(--color-goldhero)',
      greenhero: 'var(--color-greenhero)',
      darkerhero: 'var(--color-darkerhero)',
      darkhero: 'var(--color-darkhero)',
      darktext: 'var(--color-darktext)',
      orange: 'var(--color-orange)',
    }
  },
  plugins: [],
}