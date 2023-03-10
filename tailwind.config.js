/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-teal': '#3A998E',
				'dark-blue': '#273C47'
			},
			fontFamily: {
				sans: ['Montserrat', 'san-serrif']
			},
			boxShadow: {
				'custom-shadow': '4px 4px 15px rgba(0, 0, 0, 0.25)'
			}
		}
	},
	plugins: []
};
