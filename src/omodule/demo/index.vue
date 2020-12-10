<template>

  <view class="color">
    <text> {{state.msg}} </text>
  </view>

  <view>
    <view>{{state.num}} num</view>
    <view>{{double}} double</view>
    <button @tap="addNum">点我增加</button>
  </view>

  <button @tap="go">点击我去首页</button>

  <view>
    <view class="iconfont icon-camera"></view>
    <my-icon class="icon" type="bi"></my-icon>
  </view>
</template>

<script>
import { setup, onBeforeMount, onMounted, reactive, ref, computed, watchEffect } from 'vue'
import Taro from '@tarojs/taro'
import MyIcon from '@/components/Icon/index'

export default {
  name: 'Add',
  components: { MyIcon },
  setup () {
    console.log('create')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    const state = reactive({
      msg: 'add',
      num: 0
    })

    const double = computed(() => state.num * 2)

    function go () {
      console.log('我被触发了 go')
      Taro.navigateTo({ url: '/omodule/timeline/index' })
    }

    const addNum = () => {
      console.log('add')
      state.num++
    }

    return {
      go,
      state,
      addNum,
      double
    }
  }
}
</script>

<style lang="less">
@import "./index.module.less";
</style>
