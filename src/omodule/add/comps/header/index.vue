<template>
  <view class="tag-view">
    <view :class="['tag', type === t.name ? 'on': '']" v-for="t in tag" :key="t.name" @tap="handleClick(t.name)">
      {{t.title}}</view>
  </view>
</template>

<script>

import { setup } from 'vue';

const tag = [
  {
    name: 'income',
    title: '收入'
  },
  {
    name: 'pay',
    title: '支出'
  }
]

export default {
  name: 'MyHeader',
  props: {
    type: {
      type: String,
      default: 'pay'
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    const handleClick = (type) => {
      props.onChange(type)
    }

    return {
      tag,
      handleClick
    }
  }
}
</script>

<style lang="less" >
@import "../../../../styles/color.less";
@import url("./style.module.less");
</style>