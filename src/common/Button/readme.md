## API

- [element.button#attributes](https://element.eleme.cn/2.0/#/zh-CN/component/button#attributes)
- [iviewui.button#Button_props](https://iviewui.com/components/button#Button_props)

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值 | 
---|---|---|---|---
size | 尺寸 | string | medium / small / mini | — | 
type | 类型 | string | primary / success / warning / danger / info / text | — | 
plain | 是否朴素按钮 | boolean | — | false | 
round | 是否圆形按钮 | boolean | — | false | 
loading | 是否加载中状态 | boolean | — | false | 
disabled | 是否禁用状态 | boolean | — | false | 
icon | 图标类名 | string | — | — | 
autofocus | 是否默认聚焦 | boolean | — | false | 
native-type | 原生 type 属性 | string | button / submit / reset | button |




### Button props

属性 | 说明 | 类型 | 默认值
---|---|---|---
type | 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置 | String | default | 
ghost | 幽灵属性，使按钮背景透明 | Boolean | false | 
size | 按钮大小，可选值为`large`、`small`、`default`或者不设置 | String | default | 
shape | 按钮形状，可选值为`circle`或者不设置 | String | \- | 
long | 开启后，按钮的长度为 100% | Boolean | false | 
html-type | 设置`button`原生的`type`，可选值为`button`、`submit`、`reset` | String | button | 
disabled | 设置按钮为禁用状态 | Boolean | false | 
loading | 设置按钮为加载中状态 | Boolean | false | 
icon | 设置按钮的图标类型 | String | \- | 
custom-icon | 设置按钮的自定义图标 | String | \- | 
to | 跳转的链接，支持 vue-router 对象 | String | Object | \- | 
replace | 路由跳转时，开启 replace 将不会向 history 添加新记录 | Boolean | false | 
target | 相当于 a 链接的 target 属性 | String | \_self | 
append 3.4.0 | 同 vue-router append | Boolean | false |

