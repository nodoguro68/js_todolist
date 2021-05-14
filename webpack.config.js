const path = require('path');

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
};