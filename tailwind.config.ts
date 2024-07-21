import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   container: '1180px',
    // },
    extend: {
      maxWidth: {
        customScreenSize: '73.75rem',
      },
      fontFamily: {
        body: ['Kollektif', 'sans-serif'],
        title: ['Norwester', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
