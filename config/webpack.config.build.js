const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const devMode = false

module.exports = {
    entry: {
        v1: './src/entry/index.js',
        v2: './src/entry/index2.js',
        v3: './src/entry/index3.js',
        v4: './src/entry/index4.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist/')
    },
    mode:'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|c|sc)ss$/,
                use: [
                    'vue-style-loader',
                    // 还未抽取css并合并，所以sourceMap设置与否都没啥用
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../dist'
                        }
                    },
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         injectType: 'styleTag',
                    //         insert:'head'
                    //
                    //     }
                    // },

                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('development-版权所有,翻版必究'),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'v1.html',
            chunks: ['v1'],
            template: './src/template.html',
            minify: {
                collapseWhitespace: false, // 去除空格
                removeComments: true //去除注释
            }
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'v2.html',
            chunks: ['v2'],
            template: './src/template2.html',
            minify: {
                collapseWhitespace: false, // 去除空格
                removeComments: true //去除注释
            }
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'v3.html',
            chunks: ['v3'],
            template: './src/template3.html',
            minify: {
                collapseWhitespace: false, // 去除空格
                removeComments: true //去除注释
            }
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'v4.html',
            chunks: ['v4'],
            template: './src/template4.html',
            minify: {
                collapseWhitespace: false, // 去除空格
                removeComments: true //去除注释
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename:  'css/[name].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
};