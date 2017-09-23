const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATH = {
	app:path.join(__dirname,'js/test.js'),
	app1:path.join(__dirname,'js/index.js'),
	build:path.join(__dirname,'build')
};

module.exports = {
	devServer:{
		host:process.env.HOST,
		port:80,
	},
	entry:{
		test:PATH.app,
		index:PATH.app1
	},
	output:{
		path:PATH.build,
		filename:'[name]/index.bundle.js',
	},
	module:{
		rules:[
			 {
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		      },
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			title:'index',
			chunks: ['index'],
			template: './index.html'
		}),
		new HtmlWebpackPlugin({
			filename:'test.html',
			title:'test',
			chunks: ['test'],
			template: './page/test.html'
		}),
		new ExtractTextPlugin("[name].styles.css"),
	]
};
