<template>
  <view class="header">
    <view class="side">
      <text>{{11}}月收入</text>
      <text>{{'XXXXX'}}</text>
    </view>
    <view class="center">
      <text>月预算</text>
      <text>{{'XXXXX'}}</text>
    </view>
    <view class="side">
      <text>{{11}}月支出</text>
      <text>{{'XXXXX'}}</text>
    </view>
  </view>
</template>

<script>

import { setup } from 'vue'

export default {
  name: 'TimelineHeader',
  setup () {
    return {

    }
  }
}
</script>

<style lang="less">
@import "./index.module.less";
</style>