<template>
  <view class="wrapper">
    <view class="line">
      <MyIcon class="icon" :type="item.icon" />
      <view class="line-label" hoverClass="hover">{{item.name}}</view>
      <view class="line-num" hoverClass="hover">￥{{total}}</view>
    </view>

    <scroll-view :scrollY="true" class="scroll-wrap">
      <view class="icon-list">
        <view class="icon-item" v-for="t in iconList" :key="t.id" @tap="handleClick(t)" hoverClass="hover">
          <MyIcon class="icon" :type="t.icon" />
          <view class="text">{{t.name}}</view>
        </view>
        <view class="icon-item" hoverClass="hover" @tap="handleEdit">
          <view class="iconfont icon-add-circle add-icon"></view>
          <view class="text">编辑</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import { setup, reactive, ref } from 'vue'
import MyIcon from '@/components/Icon'

export default {
  name: 'MyBody',
  components: { MyIcon },
  props: {
    item: {
      type: Object,
      require: true
    },
    total: {
      type: String,
      required: true
    },
    iconList: {
      type: Array,
      required: true
    },
    onChange: {
      type: Function
    }
  },
  setup (props) {
    const handleClick = (t) => {
      props.onChange(t)
    }

    const handleEdit = () => {
      // TODO:
      console.log('edit more icon')
    }

    return {
      handleClick,
      handleEdit
    }
  }
}
</script>

<style lang="less" >
@import url("./style.module.less");
</style>