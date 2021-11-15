module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,png,css,html,json,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};