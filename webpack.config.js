var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + "/src",
	entry: "./main.ts",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({mangle: false})
	],
	target: 'web',
	node: {
		fs: "empty"
	},
	module: {
		rules: [
			{ 
				test: /\.tsx?$/, 
				loader: "ts-loader",
			},
			{
				test: /\.txt$/,
				use: "raw-loader"
			}
		]
	},
	resolve: {
        extensions: [".tsx", ".ts", ".js"]
	}
};