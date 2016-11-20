module.exports = {
    entry: './src/app.jsx',
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
