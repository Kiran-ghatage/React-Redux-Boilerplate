const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1']
        }
      }
    ]
  }
}



// const path = require('path');
// const webpack = require('webpack');
 
 
// module.exports = {
//   mode: 'production',
//   entry: './src/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public')
//   },
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: path.resolve(__dirname,'./node_modules/babel-loader'),
//         options: {
//           presets: ['react', 'env', 'stage-1']
//         }
//       }
//     ]
//   }
// 