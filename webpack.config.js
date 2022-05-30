export default {
	entry: './detect.js',
	output: {
		filename: 'bundle.js',
		library: 'detect',
	},

	resolve: {
		extensions: ['.js', '.mjs'],  // Resolve .mjs files in Fathom (no need for Babel)
	},
	module: {
		rules: [
			{
				test: /\.m?js$/i,
				resolve: {
					fullySpecified: false,  // Do not require extensions in imports
				},
			},
		],
	},

	devtool: false,  // No source map
};
