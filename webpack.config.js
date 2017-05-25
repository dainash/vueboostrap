/**
 * @file webpack.config.js
 * @author daixiangyu<daixiangyu@bytedance.com> .
 */


"use strict";
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let pkg = require(path.resolve(__dirname, 'package.json'));
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let proxyConf = require(path.resolve(__dirname, 'proxy.conf.js'));

process.noDeprecation = true;

module.exports = {
    entry: {
        'main': ['./src/index.js']
    },
    output: {
        path: process.env.NODE_ENV === 'development'
            ? path.resolve(__dirname, pkg.build.outputPath)
            : path.resolve(__dirname, pkg.build.outputPath, pkg.build.resourceOutputPath), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: process.env.NODE_ENV === 'development' ? '/' : pkg.build.staticOutputPath,
        filename: '[name]_[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'drill platfrom',
            template: './index.html',
            filename: process.env.NODE_ENV === 'development'
                ? 'index.html'
                : path.resolve(__dirname, pkg.build.outputPath, pkg.build.templateOutputPath, 'index.html')
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        proxy: proxyConf,
        disableHostCheck: true,
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    stats: "errors-only",
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        })
    ])
}
