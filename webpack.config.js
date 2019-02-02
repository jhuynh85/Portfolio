var HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	module: {
		entry: "index.js",
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./dist/index.html",
			filename: "./index.html"
		})
	]
};
