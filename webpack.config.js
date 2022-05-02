const path= require('path');
const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { postcss } = require('postcss-preset-env');

module.exports={
    context: __dirname,
   entry: './src/index.js',
   output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index.bundle.js',
    publicPath: '/',
},
devServer: {
    open: true,
    historyApiFallback:true,
       },
      plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }),

    ],
        module:{
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude:/node_modules/,
              use: 'babel-loader',
            },
            {
              test: /\.css?$/,
              use: [ 'style-loader', 'css-loader','postcss-loader'],
            },
            
            {
              test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
              type: 'asset',
            },
          ],
    },
     
   
};