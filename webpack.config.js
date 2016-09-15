module.exports = {
  entry: ['./client/main.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    //defines tasks that we want webpack to do while bundling
    loaders: [
      {
        test: /\.js$/, //if .js is at the end of a file, perform loader
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}