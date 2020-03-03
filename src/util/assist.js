/**
 * @description 判断参数是否是其中之一
 * @param {*} value
 * @param {Array} [validList=[]]
 * @returns
 */
export function oneOf (value, validList = []) {
  const len = validList.length
  for (let i = 0; i < len; i++) {
    if (value === validList[i]) return true
  }
  return false
}
