const path = require('path');

module.exports = {
    mode: 'devlopment',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
    },
};