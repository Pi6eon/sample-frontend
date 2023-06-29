const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/sample_index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './sample_index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map', // allows error messages to be mapped to the code we wrote and not compiled version
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        host: 'localhost',
        hot: true,
        open: true
    }
}