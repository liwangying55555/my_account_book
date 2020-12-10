<template>
  <view class="edit-page">

    <view class="page-top">
      <MyHeader :type="type" @change="handleChangeTag" />
    </view>

    <view class="page-center">
      <MyBody :iconList="iconList" :total="total" :item="item" @change="handleChangeIcon" />
    </view>

    <view class="page-bottom">
      <MyCalculator />
    </view>
  </view>
</template>

<script>
import { setup, onBeforeMount, onMounted, reactive, toRefs, computed, watchEffect } from 'vue'
import Taro from '@tarojs/taro'
import { dealPrice } from '../../utils/index'
// comps
import MyIcon from '@/components/Icon/index'
import MyHeader from './comps/header/index'
import MyBody from './comps/body/index'
import MyCalculator from './comps/calculator'
// api
import iconListApi from '../../../mock/account/icon'

export default {
  name: 'Add',
  components: {
    MyIcon,
    MyHeader,
    MyBody,
    MyCalculator
  },
  setup () {
    const data = reactive({
      type: 'pay',
      iconList: [],
      total: '0.00',
      item: {} // 当前选中icon
    })

    const handleChangeTag = (type) => {
      data.type = type
    }

    const handleChangeIcon = (item) => {
      data.item = item
    }

    const dealTotal = () => {

    }

    const getIconList = () => {
      const reqData = iconListApi().DATA.list
      data.iconList = reqData
      data.item = reqData[0]
    }

    getIconList()

    return {
      ...toRefs(data),
      handleChangeTag,
      handleChangeIcon
    }
  }
}
</script>

<style lang="less">
@import "./index.module.less";
</style>
