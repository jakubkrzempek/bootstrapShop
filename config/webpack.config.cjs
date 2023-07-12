
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    entry: './src/js/app.js',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'src/img/[name][ext]',
                },
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         esModule: false,
            //         outputPath: 'img',
            //         name: '[name].[ext]',
            //         publicPath: 'img/',


            //     },
            // },
        ]
    },
    output: {
        filename: 'end.js',
        path: path.resolve(__dirname, '../', 'build'),
        // assetModuleFilename: '../src/img/[name].[ext]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "templates/index.html",
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        open: true,
    }
};