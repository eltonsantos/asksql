import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)'],
      },
      colors: {
        candy: {
          50: '#f0fbfd',
          100: '#d0f3fa',
          200: '#b9eef8',
          300: '#98e6f4',
          400: '#85e1f2',
          500: '#66d9ef',
          600: '#5dc5d9',
          700: '#489aaa',
          800: '#387783',
          900: '#2b5b64',
        },
        lime: {
          50: '#f0fbfd',
          100: '#d0f3fa',
          200: '#b9eef8',
          300: '#98e6f4',
          400: '#85e1f2',
          500: '#66d9ef',
          600: '#5dc5d9',
          700: '#489aaa',
          800: '#387783',
          900: '#2b5b64',
        },
        gum: {
          50: '#f0fbfd',
          100: '#d0f3fa',
          200: '#b9eef8',
          300: '#98e6f4',
          400: '#85e1f2',
          500: '#66d9ef',
          600: '#5dc5d9',
          700: '#489aaa',
          800: '#387783',
          900: '#2b5b64',
        },
      }
    },
  },
  plugins: [],
}
export default config
