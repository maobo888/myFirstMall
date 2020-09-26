module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    public: '192.168.137.1:8080',
    hot: true,
    disableHostCheck: true,
  }
}
