/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#16161a',
				textColor: '#fffffe',
				'mountain-meadow': {
					50: '#eefbf4',
					100: '#d7f4e3',
					200: '#b1e9ca',
					300: '#7fd6ad',
					400: '#4abd8a',
					500: '#2cb67d',
					600: '#198258',
					700: '#146849',
					800: '#12533c',
					900: '#104432',
					950: '#08261d'
				},
				silver: {
					50: '#f7f7f7',
					100: '#ededed',
					200: '#dfdfdf',
					300: '#c6c6c6',
					400: '#adadad',
					500: '#999999',
					600: '#888888',
					700: '#7b7b7b',
					800: '#676767',
					900: '#545454',
					950: '#363636'
				}
			}
		}
	},
	plugins: []
};
