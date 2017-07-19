var webpack = require('webpack');
var webpackconfig = require('./webpack.config');
var express = require('express');
var compiler = webpack(webpackconfig);
var app = express();
app.use(require('webpack-dev-middleware')(compiler,{
    // noInfo: true, 
    // publicPath: webpackconfig.output.path
    log:()=>{}
}));
app.use(require('webpack-hot-middleware')(compiler))
app.listen('8080')