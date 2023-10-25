const path = require('path');

module.exports = {
    // ...
    output: {
        // ...
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            // ...
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};