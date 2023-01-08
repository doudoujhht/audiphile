/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-mobile': "url('/assets/home/mobile/image-header.jpg')",
				'speaker-mobile':
					"url('/assets/home/product-yx1-earphones/mobile/image-category-page-preview.jpg')"
			},
			colors: {
				primary: '#D87D4A',
				'primary-light': '#fbaf85',
				secondary: '#101010',
				'secondary-light': '#F1F1F1',
				tertiary: '#FAFAFA'
			}
		}
	},
	plugins: [require('daisyui')]
};
