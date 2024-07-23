import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        customScreenSize: '73.75rem',
      },
      fontFamily: {
        body: ['Kollektif', 'sans-serif'],
        title: ['Norwester', 'sans-serif'],
      },
      screens: {
        smallest: '480px',
      },
      keyframes: {
        autoRun: {
          from: {
            left: '100%',
          },
          to: {
            left: 'calc(320px*-1)',
          },
        },
      },
      animation: {
        autoRun: 'autoRun 10s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      maskImage: ['responsive'],
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        '.mask-custom-gradient': {
          maskImage:
            'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
        },
      });
    },
  ],
};

export default config;
