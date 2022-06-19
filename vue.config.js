const path = require('path')
const { defineConfig } = require('@vue/cli-service')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  css: {
    // loaderOptions: {
    //   // 给 sass-loader 传递选项
    //   sass: {
    //     // @/ 是 src/ 的别名
    //     // 所以这里假设你有 `src/assets/stylesheets/imports.scss` 这个文件
    //     prependData: "@import '@/assets/stylesheets/imports.scss';"
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('static', resolve('static'))
      .set('packages', resolve('packages'))
      .set('mixins', resolve('src/mixins'))
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  }
})

function resolve (dir) {
  return path.join(__dirname, dir)
}
