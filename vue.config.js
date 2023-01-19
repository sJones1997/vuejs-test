const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  css: {
    extract: false
  }, 
  configureWebpack: config => {
    config.output.filename("form-build.js")
    config.splitChunks = false;
  }

})
