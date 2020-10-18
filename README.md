# React-Basic-App

The most simplest setup for Basic React App
- First of all make a repository with the name you want.
- Go there and type `npm init -y` to initialize it.
- Follow the commands below and you will have a React App ready in its most basic form but also in the state of deployment (Considering only frontend.)

---  
## The Module Setup

#### Webpack Installation
- `npm i -D webpack webpack-cli`

#### Webpack Plugins & Loaders
- `npm i -D html-webpack-plugin html-loader file-loader`

#### Webpack Dev Server
- `npm i -D webpack-dev-server`

#### Babel & Babel Components
- `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties babel-preset-es2015`
  
---  
## The File Structure
- Generally, we have seen that files and folder structure of different developer vary depending on the requirements. Here I have keep it super simple.

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
