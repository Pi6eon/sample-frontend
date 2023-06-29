const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/sample_index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './sample_index.html',
            filename: 'index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}