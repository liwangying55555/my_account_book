<template>
  <view class="timeline-page">
    <my-header></my-header>
    <scroll-view class="wrap" :scrollY="true">
      <view v-for="(item, idx) in list" :key="idx + '_day_' + item.date">

        <view v-for="t in item.list" :key="t.id + '_item_' + t.id">
          <list-item :data="t"></list-item>
        </view>
        
      </view>
    </scroll-view>
    <view class="iconfont icon-add-circle add-icon" @tap="goToAddPage"></view>
  </view>
</template>

<script>

import { setup, reactive, toRefs, ref } from 'vue'
import goToPage from '@/utils/goToPage'
import listApi from '../../../mock/account/home'
// compos
import MyHeader from './comps/header/index'
import ListItem from './comps/listItem'

export default {
  name: 'Timeline',
  components: {
    MyHeader,
    ListItem
  },
  setup () {
    const data = reactive({
      list: []
    })

    const renderItem = (data) => {
      // 合成构建
      return data
    }

    const getData = () => {
      const res = listApi().DATA // TODO:
      data.list = res.list
    }
    getData()
    
    return {
      ...toRefs(data),
      renderItem,
      goToAddPage: goToPage.add,
    }
  }
}
</script>

<style lang="less">
@import "./index.module.less";
</style>