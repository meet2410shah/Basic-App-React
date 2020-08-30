const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/',
	},
	optimization: {
		minimize: true,
	},
};
