const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// let htmlPageNames = ['about']
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//  return new HtmlWebpackPlugin({
//   template: `./src/${name}.html`,
//   filename: `${name}.html`,
//   chunks: [`${name}`]
//  })
// })

module.exports = merge(common, {
 mode : "development",
 output: {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "dist")
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/index.html",
   chunks: ['main']
  })
 ], //.concat(multipleHtmlPlugins),
 module : {
  rules: [
   {
    test: /\.scss$/,
    use: [
     "style-loader",
     "css-loader",
     {
      loader: "sass-loader",
      options: {
       implementation: require("sass"),
       sassOptions: {
         fiber: require("fibers"),
       },
      }
     },
    ]
   }
  ]
 }
})