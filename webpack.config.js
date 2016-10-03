// var webpack = require('webpack')
module.exports = {
  devtool: 'eval',
  entry: ['./client/main.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
      inline: true,
      port: 4000
   },
  // plugins : [
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],
  module: {
    //defines tasks that we want webpack to do while bundling
    loaders: [
      {
        test: /\.jsx?$/, //if .js is at the end of a file, perform loader
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}