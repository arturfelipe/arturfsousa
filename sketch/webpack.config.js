module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  }
}