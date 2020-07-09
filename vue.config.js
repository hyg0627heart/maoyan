const path =require('path')
const { assert } = require('console')

module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                pages:path.resolve(__dirname,'./src/pages'),
                asserts:path.resolve(__dirname,'./src/assets'),
                styles:path.resolve(__dirname,'./src/assets/styles')
            }
        }
      }
  }