<template>
  <view class="calculator-wrap">
    <!-- 操作栏 -->
    <view class="option-top">
      <view class="date">12月10日</view>
      <view class="iconfont icon-edit"></view>
    </view>
    <!-- 键盘 -->
    <view class="option-wrap">
      <view class="option-item" v-for="(t,i) in numberList" :key="'_option' + i" @tap="handleClick(t)"
        hoverClass="hover">
        <text v-if="t.type === 'number' || t.type === 'dele'">{{t.label}}</text>
        <view v-else-if="t.type === 'enter'" class="center-key">{{t.label}}</view>
        <view v-else :class="['iconfont', t.label]"></view>
      </view>
    </view>
  </view>
</template>

<script>
import { setup } from 'vue'

const number = [
  {
    label: 7,
    value: 7,
    type: 'number'
  },
  {
    label: 8,
    value: 8,
    type: 'number'
  },
  {
    label: 9,
    value: 9,
    type: 'number'
  },
  {
    label: 'icon-delete',
    type: 'backspace'
  },
  {
    label: 4,
    value: 4,
    type: 'number'
  },
  {
    label: 5,
    value: 5,
    type: 'number'
  },
  {
    label: 6,
    value: 6,
    type: 'number'
  },
  {
    label: 'icon-add-bold',
    type: 'add'
  },
  {
    label: 1,
    value: 1,
    type: 'number'
  },
  {
    label: 2,
    value: 2,
    type: 'number'
  },
  {
    label: 3,
    value: 3,
    type: 'number'
  },
  {
    label: 'icon-minus-bold',
    type: 'minus'
  },
  {
    label: 'C',
    type: 'dele'
  },
  {
    label: 0,
    value: 0,
    type: 'number'
  },
  {
    label: '.',
    value: '.',
    type: 'number'
  },
  {
    label: '确定',
    type: 'enter'
  }
]

export default {
  name: 'MyCalculator',
  props: {
  },
  setup (props) {
    const handleClick = (item) => {
      switch (item.type) {
        case 'number':
          break
        case 'backspace':
          break
        case 'add':
          break
        case 'minus':
          break
        case 'dele':
          break
        case 'enter':
          break
      }
    }
    return {
      numberList: number,
      handleClick
    }
  }
}
</script>

<style lang="less" >
@import "../../../../styles/color.less";
@import url("./style.module.less");
</style>