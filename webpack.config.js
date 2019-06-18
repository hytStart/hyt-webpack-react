// const path = require('path')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// const publicPath = "/assets/"

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         // filename: '[name].bundle.[hash].js',
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         publicPath,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: "style-loader",
//                     use: ["css-loader"],
//                 }),
//             },
//             {
//                 test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             limit: 8192,
//                         }
//                     },
//                 ],
//             },
//             {
//                 test: /\.(mp4|ogg)$/,
//                 use: [
//                     'file-loader',
//                 ],
//             },
//             {
//                 test: /\.(csv|tsv)$/,
//                 use: [
//                     'csv-loader',
//                 ]
//             },
//             {
//                 test: /\.xml$/,
//                 use: [
//                     'xml-loader',
//                 ]
//             }
//         ],
//     },
//     plugins: [
//         // new CleanWebpackPlugin(),
//         // new HtmlWebpackPlugin({
//         //     title: 'Output Management',
//         // }),
//         new ExtractTextPlugin("styles.css"),
//     ],
//     devtool: 'eval-source-map',
//     devServer: {
//         contentBase: './src/',
//         publicPath,
//         port: 9000,
//         hot: true, // 启动热更新
//         https: true, // 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务
//         open: true,
//         overlay: true,
//         // before() {

//         // },
//         // proxy: {
//         //     "/api": {
//         //         target: "http://localhost:3000",
//         //         secure: false,
//         //         pathRewrite(paths, req) {
//         //             console.info(`本地请求地址：${req.originalUrl}`)
//         //             return `${paths.replace(/^\/api/, '/testdata/')}.json`
//         //         },
//         //         changeOrigin: true,
//         //         onProxyReq(proxyReq, req, res) {
//         //             proxyReq.method = 'GET'
//         //             proxyReq.setHeader('Access-Control-Allow-Origin', true)
//         //         },
//         //         bypass: function(req, res, proxyOptions) {
//         //             if (req.headers.accept.indexOf("html") !== -1) {
//         //                 console.log("Skipping proxy for browser request.");
//         //                 return "/index.html";
//         //             }
//         //         }
//         //     }
//         // },
//     },
// }

const path = require('path')
const args = require('minimist')(process.argv.slice(2))

const { env } = args
process.env.REACT_WEBPACK_ENV = env

const bulidConfig = require(path.join(__dirname, 'webpackCfg/' + env))

module.exports = bulidConfig