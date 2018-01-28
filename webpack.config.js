'use strict';

var webpack = require('webpack');
var WriteFilePlugin = require("write-file-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
const path = require('path');

var distDir = path.resolve(__dirname, 'dist');

module.exports = {
    // Entry point : first executed file
    // This may be an array. It will result in many output files.
    entry: './src/index.ts',

    // What files webpack will manage
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css']
    },

    // Make errors mor clear
    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main_bundle.js",
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },

    module: {
        loaders: [
            {
                test: /index\.html$/,
                loader: 'html'
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
        rules: [
            {
                test: /\.ts?$/,
                loaders: ['ts-loader'],
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
        new CleanWebpackPlugin([distDir]),
        new WriteFilePlugin,
        new CopyWebpackPlugin([
            // {output}/file.txt
            {from: 'src/assets', to: "assets"}
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new VendorChunkPlugin('vendor')
    ]
};