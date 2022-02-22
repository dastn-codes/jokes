const path = require("path");
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.bundle.css',
        chunkFilename: '[id].css'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "dist", 'index.html'),
      }),
    ],

    entry: path.resolve(__dirname, "src", 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        client: {
            logging: 'none',
            overlay: false
        },
        port: 9000,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', {
                      "targets": "defaults" 
                    }],
                    '@babel/preset-react'
                  ]
                }, 
              },
            ]
          },
          {
            test: /\.(tsx|ts)?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'ts-loader'
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 0 
                }
              }
            ]
          },
        ]
      }
}