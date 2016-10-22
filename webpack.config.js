module.exports = {
    entry: './src/test.jsx',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: './public',
        stats: 'minimal'
    }
};
