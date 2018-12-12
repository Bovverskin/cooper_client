var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
        test: ,
        loaders: [{
          loader: 'ts-loader'
        }, 'angular2-template-loader']
      },
      {
        test: ,
        exclude: ,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        query: {
          esModules: true
        }
      },
      {
        test: ,
        loader: 'html-loader?attrs=false'
      },
      {
        test: ,
        loader: 'null-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      ,
      root('./src'),
      {}
    )
  ]
};

function root(localPath) {
  return path.resolve(__dirname, localPath);
}