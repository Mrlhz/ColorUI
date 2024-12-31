// import { get } from './get'
import componentJSON from '../../static/component.json'

function getComponentList () {
  return Promise.resolve(componentJSON.data)
}

export {
  getComponentList
}
