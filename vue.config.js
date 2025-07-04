const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/main.scss";`
      }
    }
  }
}

module.exports = {
  publicPath: '/parcial-2/'
}

