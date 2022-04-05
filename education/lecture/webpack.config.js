const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실 서비스: production
    devtool: 'eval',

    resolve: {
        extensions: [ '.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },  // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [{
                    presets: ['@babel/preset-env','@babel/preset-react'],
                }],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //__dirname : 현재 폴더 위치
        filename: 'app.js'
    },  // 출력
};