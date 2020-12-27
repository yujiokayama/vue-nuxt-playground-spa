const path = require('path')
const rootPath = path.resolve(__dirname, '../')

/**
 * Nuxtプロジェクトで使用している@や~などのエイリアス設定
 */
module.exports = ({ config }) => {
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  return config
}
/**
 * scssの使用設定、かつ変数やmixinを使用している場合
 */
config.module.rules.push({
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: ['./assets/styles/scss/variables/_color.scss'],
        rootPath,
      },
    },
  ],
})

/**
 * css内からassets以下のファイルにアクセスできるように設定
 */
config.resolve.modules = [...(config.resolve.modules || []), rootPath]
