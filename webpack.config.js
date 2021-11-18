const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {index: '/'},
    open:true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
    new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]",
              },
              sourceMap: true,
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          '@svgr/webpack'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader', options: {plugins:[require.resolve('react-refresh/babel')]}}],
      },
    ],
},
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
}