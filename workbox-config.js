module.exports = {
	globDirectory: '/var/www/html/pwa/',
	globPatterns: [
		'**/*.{css,html,js,json,png}'
	],
	swDest: '/var/www/html/pwa/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};