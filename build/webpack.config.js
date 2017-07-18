var path = require('path');
var HtmlWebpackPlguins = require('html-webpack-plugin');
var webpackDevServer = require('webpack-dev-server'); 
var webpack = require('webpack');
var express = require('express');
// var babelloader = require('babel-loader');
var app = express();
module.exports = {
    devtool: 'eval-source-map',
    entry:"../src/main.js",
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js',
        // publicPath:'www.test.com/'   // “path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        }]
    },
    plugins:[
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    // }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlguins({
        title:'vvvv',
      filename: '../index.html',
      template: '../index.html',
      inject: true
      })
    ],
    devServer: {
        contentBase: "../",  //以public为根目录提供文件
        // colors: true,
        historyApiFallback: true,
        inline: true
    }
}