/**
 * @description 派发与广播——自行实现 dispatch 和 broadcast 方法
 *
 * @param {String} componentName 组件的 `name` 值
 * @param {String} eventName 自定义事件名称
 * @param {*} params 传递的数据
 */
function broadcast (componentName, eventName, params) {
  console.log(this, 2)
  this.$children.forEach((child) => {
    const name = child.$options.name

    if (name === componentName) {
      child.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
