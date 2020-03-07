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

/**
 * @description 向上找到最近的指定组件
 *
 * @export
 * @param {*} context 当前上下文，一般都是基于当前的组件，也就是传入 `this`
 * @param {*} componentName 要找的组件的 `name`
 * @returns 组件的实例
 */
export function findComponentUpward (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (name) name = parent.$options.name
  }

  return parent
}

/**
 * @description 由一个组件，向上找到所有的指定组件
 *
 * @export
 * @param {*} context
 * @param {*} componentName
 * @returns
 */
export function findComponentsUpward (context, componentName) {
  const parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}
