var webpack = require('webpack');

module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:4006', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/index.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/build/', //webpack-dev-server服务器下资源目录的绝对路径
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

//node webpack-dev-server.js --port 9090 --inline --host $ip --content-base static/dist/


// const webpack = require('webpack');

// module.exports = {
//     entry: "./src/js/index.js",
//     output: {
//         path: './build',
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     }
// };
