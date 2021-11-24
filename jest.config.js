// jest.config.js
export default {
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		]
	},
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'svelte']
};
