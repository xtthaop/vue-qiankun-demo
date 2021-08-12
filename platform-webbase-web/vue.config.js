const { name } = require('./package')

module.exports = {
  devServer: {
    port: 5065,
    proxy: {
      '/child/app/microapp/web': {
        target: 'http://localhost:5066',
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT',
    }
  }
}
