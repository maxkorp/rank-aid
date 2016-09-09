const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?./,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'client')
      }
    ],
    loaders: [
      {
        test: /\.js?./,
        loader: 'babel-loader',
        include: path.join(__dirname, 'client'),
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader?strictMath'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ico|png|svg|json|xml|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      { from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'styles'}
    ])
  ]
};
