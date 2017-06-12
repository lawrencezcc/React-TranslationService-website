const path = require('path');
const webpack = require('webpack');

const config = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/src/',
        publicPath: '/src/',
        filename: 'bundle.js'
    },
    resolve:{
      extensions:[".js", ".json", ".jsx", ".css"]
    },
    module: {
        loaders: [{
            test: /\.(jsx?$)/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: "json-loader"}
        ]
    }
};

module.exports = config;
