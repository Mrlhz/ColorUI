/**
 * 设置cookie copy https://www.jianshu.com/p/daccc2e3444e
 * @param {[type]} key   [键名]
 * @param {[type]} value [键值]
 * @param {[type]} days  [保存的时间（天）]
 */

function setCookie (key, value, days) {
  // 设置过期原则
  if (!value) {
    localStorage.removeItem(key)
  } else {
    var Days = days || 7 // 默认保留7天
    var exp = new Date()
    localStorage[key] = JSON.stringify({
      value,
      expires: exp.getTime() + Days * 24 * 60 * 60 * 1000
    })
  }
}

function getCookie (name) {
  try {
    let o = JSON.parse(localStorage[name])
    if (!o || o.expires < Date.now()) {
      localStorage.removeItem(name)
      return null
    } else {
      return o.value
    }
  } catch (e) {
    // 兼容其他localstorage
    throw e
    // return localStorage[name]
  } finally {}
}

export {
  setCookie,
  getCookie
}
