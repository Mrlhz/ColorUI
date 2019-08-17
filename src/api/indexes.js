class Singer {
  constructor (id, name) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}

const HOT_SINGER_LEN = 10 // 热门条目
const HOT_NAME = '热门'

export function _normalizeList (list) {
  let types = []
  list.forEach((ele) => {
    if (types.indexOf(ele.Findex) === -1 && ele.Findex.match(/[a-zA-Z]/)) {
      types.push(ele.Findex)
    }
  })

  // types = types.filter((el) => {
  //   return el.match(/[a-zA-Z]/)
  // })
  let lists = []
  types.sort().forEach((el) => {
    lists.push({
      title: el,
      items: []
    })
  })
  list.forEach((el) => {
    if (el.Findex.match(/[a-zA-Z]/)) {
      lists.forEach((type) => {
        if (type.title === el.Findex) {
          type.items.push(new Singer(el.Fsinger_mid, el.Fsinger_name))
        }
      })
    }
  })
  return lists
}

/**
 * @description 处理数据
 *
 * @export
 * @param {Array} list
 * @returns Array
 * @example
 * [{
 *  title: '',
 *  items: [{
 *   avatar: '',
 *   id: '',
 *   name: ''
 *  },
 *  {}
 *  ]
 * }]
 */
export default function normalizeList (list) {
  const mapList = {
    hot: {
      title: HOT_NAME,
      items: []
    }
  }

  list.forEach((item, index) => {
    if (index < HOT_SINGER_LEN) {
      mapList.hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
    }

    const key = item.Findex
    if (!mapList[key]) {
      mapList[key] = {
        title: key,
        items: []
      }
    }

    mapList[key].items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
  })

  const hot = []
  const res = []
  for (const [, value] of Object.entries(mapList)) {
    if (value.title.match(/[a-zA-Z]/)) {
      res.push(value)
    } else if (value.title === HOT_NAME) {
      hot.push(value)
    }
  }
  res.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
  return hot.concat(res)
}

// const { data: { list } } = require('../../static/singer.json')
// normalizeList(list)
