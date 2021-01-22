const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// let htmlPageNames = ['about']
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//  return new HtmlWebpackPlugin({
//   template: `./src/${name}.html`,
//   filename: `${name}.html`,
//   chunks: [`${name}`],
//   minify: {
//      removeAttributeQuotes: true,
//      collapseWhitespace: true,
//      removeComments: true
//   }
//  })
// })

module.exports = merge(common, {
 mode: "production",
 output: {
  filename: "[name].[contenthash].bundle.js",
  path: path.resolve(__dirname, "dist")
 },
 optimization: {
  minimizer: [
   new OptimizeCssAssetsPlugin(),
   new TerserPlugin(),
   new HtmlWebpackPlugin({
    template: "./src/index.html",
    chunks: ['main'],
    minify: {
     removeAttributeQuotes: true,
     collapseWhitespace: true,
     removeComments: true
    }
   })
  ] //.concat(multipleHtmlPlugins),
 },
 plugins: [
  new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  new CleanWebpackPlugin()
 ],
 module: {
  rules: [
   {
    test: /\.scss$/,
    use: [
     MiniCssExtractPlugin.loader,
     "css-loader",
     {
      loader: "sass-loader",
      options: {
       implementation: require("sass"),
       sassOptions: {
         fiber: require("fibers"),
       },
      }
     }
    ]
   }
  ]
 }
})