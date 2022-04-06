const path = require('path');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval',    // hidden-source-map (배포 시)

    resolve: {
        extensions: ['.js','.jsx'],
    },

    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [{
                    presets: ['@babel/preset-env','@babel/preset-react']
                }],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //__dirname : 현재 폴더 위치
        filename: 'app.js',
    },
};