module.exports = {
  content: ["./layouts/**/*.{html,js}", "../../layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'serif': ["Cormorant Garamond", 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times'],

    },
    extend: {},
  },
  safelist: ['bg-yellow-100', 'text-indigo-800'],
  plugins: [
    require('@tailwindcss/typography')
  ],
}
