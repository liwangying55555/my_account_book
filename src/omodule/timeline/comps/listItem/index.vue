<template>
  <view class="list-item">

    <view class="side-wrap">
      <view class="side-inner" v-if="data.type !== 2">
        <view class="label-box left">
          <view class="price mr">{{dealPrice(data.price)}}</view>
          <view class="label">{{data.icon.name || '收入'}}</view>
        </view>
        <view class="desc left">{{data.label || ''}}</view>
      </view>
    </view>

    <view class="center">
      <my-icon v-if="data.icon.icon" class="img" :type="data.icon.icon" />
      <view class="center-day" v-else>
        <text>{{data.icon.name}}</text>
      </view>
    </view>

    <view class="side-wrap">
      <view class="side-inner" v-if="data.type !== 1">
        <view class="label-box">
          <view class="label mr">{{data.icon.name || '支出'}}</view>
          <view class="price">{{dealPrice(data.price)}}</view>
        </view>
        <view class="desc">{{data.label || ''}}</view>
      </view>
    </view>

  </view>
</template>

<script>

import { setup, reactive } from 'vue'
import { dealPrice } from '@/utils'
import dayjs from 'dayjs'
import MyIcon from '@/components/Icon'

export default {
  name: 'ListItem',
  components: { MyIcon },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          id: number,
          type: 0, // 0 both 1 收入 2 支出
          icon: {
            name: '',
            icon: ''
          },
          label: "",
          price: 289, // 单位分
          date: 1606981229056
        }
      }
    }
  },
  setup (props) {
    return {
      dealPrice
    }
  }
}
</script>

<style lang="less">
@import "./index.module.less";
</style>