const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',    //실서비스: production
    devtool: 'eval',        //실서비스: hidden-source-map
    resolve: {
        extensions: ['.js','.jsx'],
    },

    entry: {
        app: ['./client']
    },          // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],   //browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'), //__dirname : 현재 폴더 위치
        filename: 'app.js',
    },
};