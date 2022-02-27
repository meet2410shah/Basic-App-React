# Basic React App

The most simplest setup for Basic React App

- First of all make a repository with the name you want.
- Go there and type `npm init -y` to initialize it.
- Follow the commands below and you will have a React App ready in its most basic form but also in the state of deployment (Considering only frontend.)

---

## The Module Setup

#### Webpack Installation

- `npm i -D webpack webpack-cli`

#### Webpack Dev Server

- `npm i -D webpack-dev-server`

#### Babel & Babel Components

- `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties babel-preset-es2015`

#### Webpack HTML plugin & loader

- `npm i -D html-webpack-plugin html-loader`

#### Webpack File Loader (e.i., .png, .jpg, etc.)
- `npm i -D file-loader`

#### Webpack CSS loader
- `npm i -D css-loader mini-css-extract-plugin`

#### Webpack SASS loader
- `npm i -D sass sass-loader`

---

## The File Structure

- Generally, we have seen that files and folder structure of different developer vary depending on the requirements. Here I have keep it super simple.

#### Creation of webpack.config.js File
- Create the webpack.config.json file in the root directory this file will help webpack to do its job and help you to configure webpack.
- Add the following lines to the webpack.config.js
```
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.(png | svg | jpg | gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	performance: { hints: false },
};
```

#### Creationg of .babelrc File
- This will help babel to configure its part.
- Add the following code to the .babelrc file placed in the root directory

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```


#### Creation of `src` folder

- The Next Step is to create a folder in the root with a name called `src` and make some jsx files inside of it.

```
\
|-- src\
    |-- app.jsx
    |-- app.sass
    |-- index.jsx
    |-- index.sass
```

#### Installation of React and related packages
- The last and the most important step for to setup the basic react application.
- `npm i react react-dom`

### Run application
- Add scripts in package.json
```
"scripts": {
	"build": "webpack",
	"start": "webpack-dev-server"
}
```
- `npm start`
- Now go to 'http://localhost:8080' in your browser, this is the default port used by webpack-dev-server to serve the static content.
- Make changes and once you are ready for production, just go and type 'npm run build'. This will create a folder called 'dist' by defalt (which is same as npm run build in create-react-app where the name is 'build' by default) You can add the ouput object with in the webpack.config.js to specify the name. (Do not forgot to import path module)
```
output: {
	path: path.resolve(__dirname, 'build')
}
```

