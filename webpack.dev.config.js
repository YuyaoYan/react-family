const path = require('path');

module.exports = {
  /*入口*/
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    // URL的根目录。如果不设定的话，默认指向项目根目录。
    port: 3333,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '10.6.232.103',
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
    },
  },
};
