const path = require('path');
module.exports = {
    entry: path.resolve(_dirname, 'src', index.js),
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    resolve: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}