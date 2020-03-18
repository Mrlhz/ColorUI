const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/assets/stylesheets/imports.scss` 这个文件
        prependData: "@import '@/assets/stylesheets/imports.scss';"
      }
    }
  },
  chainWebpack: config => {
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('basics', resolve('src/basics'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('static', resolve('static'))
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/stylesheets/imports.scss')
      ]
    })
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
