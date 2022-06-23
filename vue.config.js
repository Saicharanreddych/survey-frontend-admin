const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  port: 8081
}),
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
}

