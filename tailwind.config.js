/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				hubot: ['Hubot Sans'],
				mona: ['Mona Sans']
			}
		}
	},
	plugins: []
};
