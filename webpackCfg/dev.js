const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        }
                    },
                ],
                include: [path.join(__dirname, '../src')],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"],
                }),
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
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './src/',
        publicPath,
        port,
        hot: true, // 启动热更新
        // https: true, // 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务
        open: true,
        overlay: true, // 在屏幕网页中提示出错
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