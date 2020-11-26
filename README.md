# React Basic App

### The Most Simplest Setup for Basic React App

---

Are you the one who don't like to use `npx create-react-app`? Here is the most simplest setup for basic react app.

Apply the following commands if you want to setup it or simply clone this repo.

## STEP: 1

### React

We need only two packages for react.

1. react
2. react-dom

So we will install it by using the following command.
`npm i react react-dom`

## STEP : 2

Now we need to import this react files, for that we need to create `src` folder in the root. And create a file name `index.js`.

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World</h1>, window.document.getElementById('app'));
```

## STEP : 3

The most important thing which we need is webpack "???" There are so many tutorials and videos out there which explains this but either they are old(Webpack 2) or not clear.

### STEP : 3.1

We need webpack.
`$ npm i -D webpack webpack-dev-server webpack-cli`

### Webpack 4

- `npm i -D webpack webpack-dev-server webpack-cli`
- `npm i -D html-webpack-plugin html-loader`
- `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties babel-preset-es2015`
- `npm i -D file-loader`

### For Developers

- If you want to add, modify or remove something important/relevant then make a pull request. I will be happy to do so.
