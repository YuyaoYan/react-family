const path = require('path');
console.log(path.join(__dirname, 'src/pages'));
module.exports = {
  /*入口*/
  // __dirname是获得当前文件所在目录的完整路径名
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
    // host: '10.6.232.103',
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
      {
        test: /\.css$/,
        //执行顺序是从右向左，先执行css-loader后执行style-loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/reduc/reducers'),
      // redux: path.join(__dirname, 'src/redux'),
    },
  },
  devtool: 'inline-source-map',
};
