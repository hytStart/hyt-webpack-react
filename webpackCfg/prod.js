const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const defaultModule = require('./default.js')
const {
    publicPath,
} = defaultModule

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist/assets/'), // 打包的路径
        publicPath, // index.html中的引入路径
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                include: [path.join(__dirname, '../src')],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        // 不知道为啥不加也行
                        options: {
                            config: {
                                path: path.resolve(__dirname, '../postcss.config.js'),
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
                include: [path.join(__dirname, '../src')],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
                include: [path.join(__dirname, '../node_modules')],
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],
            },
            {
                test: /\.(mp4|ogg)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hyt',
            filename: '../index.html',
            template: path.resolve(__dirname, '../src/template.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'styles.[hash].css',
        }),
    ],
    devtool: 'cheap-module-source-map',
}