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
  // devServer: {
  //   public: '192.168.1.4:8080',
  //   hot: true,
  //   disableHostCheck: true,
  // }
}
