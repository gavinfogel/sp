/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		keyframes: {
			fadeUp: {
				from: {
					opacity: '.2',
					transform: 'translateY(20px)'
				},
				to: {
					opacity: '1',
					transform: 'translateY(0)'
				}
			}
		},
		extend: {
			fontFamily: {
				hubot: ['Hubot Sans'],
				mona: ['Mona Sans']
			}
		},
		animation: {
			'text-up': 'fadeUp .7s ease-in-out',
			'slow-up': 'fadeUp 2s ease-in-out'
		}
	},
	plugins: []
};
