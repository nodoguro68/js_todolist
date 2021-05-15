const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
    },
    devServer: {
        open: true,
        port: 9000,
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        // }),
        
    ],
    devtool: "source-map",
    watchOptions: {
        ignored: /node_modules/
    },
};