const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"prod"',
        }),
    ],
    devtool: 'cheap-module-source-map',
    mode: "production",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                minSize: 30000,
                minChunks: 1,
                chunks: 'initial',
                priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
                },
                commons: {
                test: /[\\/]src[\\/]common[\\/]/,
                name: 'commons',
                minSize: 30000,
                minChunks: 3,
                chunks: 'initial',
                priority: -1,
                reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
                }
            }
        }
    },
}