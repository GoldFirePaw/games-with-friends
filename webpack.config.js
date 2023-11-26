const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Votre point d'entrée principal
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            // Vous pouvez ajouter d'autres règles pour d'autres types de fichiers
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Le modèle HTML de base
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions de fichiers à traiter
    },
};