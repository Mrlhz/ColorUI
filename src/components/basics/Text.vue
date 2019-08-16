<template>
  <div>
    <back>文本</back>
    <div class="text">
      <bar bgcolor="blue">文本大小</bar>
      <div class="text-wrap solids-top">
        <div class="align-items-center text-item">
          <div class="padding15">60</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <span class="icon-roundcheckfill text-green font-size-60 padding15"></span>
            <div class="padding15">用于图标、数字等特大显示</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">40</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <span class="icon-roundcheckfill text-green font-size-40 padding15"></span>
            <div class="padding15">用于图标、数字等较大显示</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">22</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <span class="text-price text-red font-size-22 padding15">80.00</span>
            <div class="padding15">用于金额数字等信息</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">18</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <span class="text-black text-bold font-size-18 padding15">您的订单已提交成功！</span>
            <div class="padding15">页面大标题，用于结果页等单一信息页</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">16</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <span class="text-black font-size-16 padding15">ColorUI组件库</span>
            <div class="padding15">页面小标题，首要层级显示内容</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">14</div>
          <div class="flex-sub text-center">
            <div class="solid-bottom font-size-14 padding15">专注视觉的小程序组件库</div>
            <div class="padding15">页面默认字号，用于摘要或阅读文本</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">12</div>
          <div class="flex flex-column flex-basis-1 text-algin-center">
            <div class="text-grey font-size-12 padding15">衬衫的价格是9磅15便士</div>
            <div class="padding15">页面辅助信息，次级内容等</div>
          </div>
        </div>
        <div class="align-items-center text-item">
          <div class="padding15">10</div>
          <div class="flex-sub text-center">
            <div class="solid-bottom font-size-10 padding15">
              <p class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</p>
            </div>
            <div class="padding15">说明文本，标签文字等关注度低的文字</div>
          </div>
        </div>
      </div>
      <bar bgcolor="blue">文字颜色</bar>
      <div class="flex-wrap">
        <div :class="['item', 'padding10', 'text-' + item.name]" v-for="item in list" :key="item.name">
          <div class="text-center">{{item.title}}</div>
        </div>
      </div>
      <bar bgcolor="blue">文字阴影</bar>
      <div class="flex-wrap">
        <div :class="['item', 'padding10', 'text-shadow', 'text-' + item.name]" v-for="item in list" :key="item.name">
          <div class="icon-ellipse text-center"></div>
        </div>
      </div>
      <bar bgcolor="blue">文字截断</bar>
      <div class="text-wrap padding15 bg-white font-size-16">
        <div class="text-cut padding15 bg-grey radius">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
      </div>
      <bar bgcolor="blue">文字对齐</bar>
      <div class="text-wrap padding15 bg-white font-size-16">
        <div class="text-left padding15">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
        <div class="text-center padding15">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
        <div class="text-right padding15">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
      </div>
      <bar bgcolor="blue">特殊文字</bar>
      <div class="padding15 text-center font-size-14 bg-gray light">
        <div class="margin-bottom10 bg-white">
          <div class="solid-bottom padding15">
            <p class="text-price">80.00</p>
          </div>
          <div class="padding15">价格文本，利用伪元素添加"¥"符号</div>
        </div>
        <div class="margin-bottom10 bg-white margin-top-10">
          <div class="solid-bottom padding15">
            <p class="text-Abc">color Ui</p>
          </div>
          <div class="padding15">英文单词首字母大写</div>
        </div>
        <div class="margin-bottom10 bg-white margin-top-10">
          <div class="solid-bottom padding15">
            <p class="text-ABC">color Ui</p>
          </div>
          <div class="padding15">全部字母大写</div>
        </div>
        <div class="bg-white margin-top-10">
          <div class="solid-bottom padding15">
            <p class="text-abc">color Ui</p>
          </div>
          <div class="padding15">全部字母小写</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../Back'
import Bar from '../Bar'

export default {
  components: {
    Back,
    Bar
  },
  data () {
    return {
      list: []
    }
  },
  inject: ['colorList'],
  created () {
    const { colorList } = this.colorList
    this.list = colorList
  }
}
</script>

<style lang="scss" scoped>
.text {
  background-color: #F1F1F1
}
.text-wrap {
  margin-bottom: .3rem;
  font-size: 0.32rem;
}

.text-wrap .text-item {
  background-color: #fff;
  border-bottom: 1.5px solid #eee;
}

.text-cut {
  width: 4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.text-bold {
    font-weight: 700;
}
.text-price:before {
  content: "\A5";
  font-size: 80%;
  margin-right: 2px;
}

.text-Abc {
    text-transform: Capitalize;
}
.text-ABC {
    text-transform: Uppercase;
}
.text-abc {
    text-transform: Lowercase;
}
.text-center {
  text-align: center;
}
.align-items-center,
.flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  .item {
    flex-basis: 25%;
  }
  .cuIcon-ellipse:before {
    content: "\E600";
  }
}

.text-algin-center {
  text-align: center;
}
.flex-basis-1 {
  flex: 1;
}
.flex-column {
  flex-direction: column;
}

.solid-bottom {
  border-bottom: 1px solid #eee;
}
</style>
