module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vueDataV/" : "/",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8081,
    // 代理
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  },
  transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ]
  }