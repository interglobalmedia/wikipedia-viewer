const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = env => {
    const {
        PLATFORM,
        VERSION
    } = env 

    return merge([{
        mode: env.PLATFORM ? 'development' : 'production',
        entry:  ['@babel/polyfill', './src/index.js'],
        output: {
            filename: PLATFORM === 'production' ? 'scripts/[name].[contenthash].chunk.js' : 'scripts/[name].chunk.js',
            chunkFilename: PLATFORM === 'production' ?
                'scripts/[name].[contenthash].chunk.js' : 'scripts/[name].chunk.js',
            path: path.resolve(__dirname, '../dist')
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(scss|sass|css)$/,
                    exclude: /node_modules/,
                    use: [
                        PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                        },
                        'sass-loader'
                        ]
                },
                {
                    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash:8].[ext]'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new ESLintPlugin({}),
            new CleanWebpackPlugin({}),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                styles: 'src/styles.css',
                inject: true
            }),
            new MiniCssExtractPlugin({
                filename: PLATFORM === 'production' ?
                    'styles/[name].[hash].css' : '[name].css'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/static', to: '../dist' }
                ]
            }),
            new WorkboxPlugin.GenerateSW({
                swDest: 'sw.js'
            }),
            new webpack.DefinePlugin({
                'process.env.VERSION': JSON.stringify(env.VERSION),
                'process.env.PLATFORM': JSON.stringify(env.PLATFORM)

            })
        ]
    }])
    
}