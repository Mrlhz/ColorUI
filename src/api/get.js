import axios from 'axios'

const ERR_OK = 0

/**
 * get helper方法，对应get请求 链接：https://juejin.im/post/5b55c118f265da0f6f1aa354
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get1 (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const {
        errno,
        data
      } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((err) => {
      return err
    })
  }
}

export function http (url) {
  return async function (params) {
    try {
      const { data: { errno, data: res } } = await axios.get(url, { params })
      console.log(res, errno)
      if (errno === ERR_OK) {
        return res
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
