import flowbite from 'flowbite-react/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        80: '80px',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
