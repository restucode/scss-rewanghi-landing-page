const path = require('path')

module.exports = {
 entry: {
  main: "./src/js/index.js",
  // about: "./src/js/about.js"
 },
 module: {
  rules : [
   {
    test: /\.html$/,
    use: ['html-loader']
   },
   {
     test: /\.(svg|png|jpe?g|gif)$/,
     use: {
       loader: "file-loader",
       options: {
        name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }

            return '[contenthash].[ext]';
          },
         outputPath: "imgs",
         publicPath: "imgs"
       }
     }
   }
  ]
 }
}