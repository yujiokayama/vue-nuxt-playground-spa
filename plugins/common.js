export default function (context, inject) {
  const common = {
    /**
     * 数値をカンマ区切りにする
     * @param {number} num
     */
    commaSeparate(num) {
      return num.toLocaleString()
    },
  }
  inject('common', common)
}
