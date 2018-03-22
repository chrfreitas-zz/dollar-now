const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:  'eslint-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './views/index.html'})
    ]
};

module.exports = config;
