var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");  
const webpack = require('webpack'); // 新增
module.exports = {
    mode: 'development',
    entry: {
      'index': [
        'webpack-hot-middleware/client',
        './src/index.js'
      ]
    },
    output: {
      path: path.resolve('./dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
           Popper: ['popper.js', 'default'],
        }),
        new webpack.NamedModulesPlugin(), // 新增
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(), //新增
        new webpack.NoEmitOnErrorsPlugin()
    ]
};