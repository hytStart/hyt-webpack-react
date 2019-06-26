const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin') // dev环境使用HtmlWebpackPlugin， 不用index.html
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const defaultModule = require('./default.js')
const {
    port,
    publicPath,
} = defaultModule

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/assets/'),
        publicPath,
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
            // {
            //     test: /\.css$/,
            //     use:  ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: ["css-loader"],
            //     })),
            // },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
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
                include: [path.join(__dirname, '../src')],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                include: [path.join(__dirname, '../node_modules')],
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
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
                        // options: {
                        //     config: {
                        //         path: path.resolve(__dirname, '../postcss.config.js'),
                        //     },
                        // },
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
                    {
                        loader: 'less-loader',
                        // options: { javascriptEnabled: true } (// import 'antd/dist/antd.less' 的时候使用)
                    }
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
        // new HtmlWebpackPlugin({ // dev环境使用HtmlWebpackPlugin， 不用index.html
        //     title: 'hyt',
        //     filename: '../index.html',
        //     template: path.resolve(__dirname, '../src/template.html')
        // }),
        // new ExtractTextPlugin("styles.css"),
        new MiniCSSExtractPlugin({
            filename: 'styles.css',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"', // 不写的话，默认 mode的 development。加了defineplugin会把之前的覆盖了。
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    mode: "development", 
    devServer: {
        contentBase: './src/',
        // contentBase: './dist/', // dev环境使用HtmlWebpackPlugin， 不用index.html
        publicPath,
        port,
        hot: true, // 启动热更新
        // https: true, // 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务
        open: true,
        overlay: true, // 在屏幕网页中提示出错
        historyApiFallback: true,
        // before() {

        // },
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:3000",
        //         secure: false,
        //         pathRewrite(paths, req) {
        //             console.info(`本地请求地址：${req.originalUrl}`)
        //             return `${paths.replace(/^\/api/, '/testdata/')}.json`
        //         },
        //         changeOrigin: true,
        //         onProxyReq(proxyReq, req, res) {
        //             proxyReq.method = 'GET'
        //             proxyReq.setHeader('Access-Control-Allow-Origin', true)
        //         },
        //         bypass: function(req, res, proxyOptions) {
        //             if (req.headers.accept.indexOf("html") !== -1) {
        //                 console.log("Skipping proxy for browser request.");
        //                 return "/index.html";
        //             }
        //         }
        //     }
        // },
    },
}