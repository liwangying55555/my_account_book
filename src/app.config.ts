export default {
  pages: [
    // 主页三巨头
    'omodule/timeline/index',
    'omodule/dataReport/index',
    'omodule/setting/index',
    // 其他模块
    'omodule/add/index'
  ],
  // TODO: 分包
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '我的账本本',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: "#888",
    selectedColor: '#8BC34A',
    backgroundColor: '#fff',
    list: [{
      pagePath: 'omodule/dataReport/index',
      iconPath: "assets/tabBar/data.png",
      selectedIconPath: "assets/tabBar/data_on.png",
      text: '报表',
    }, {
      pagePath: 'omodule/timeline/index',
      iconPath: "assets/tabBar/timeline.png",
      selectedIconPath: "assets/tabBar/timeline_on.png",
      text: '时间轴',
    }, {
      pagePath: 'omodule/setting/index',
      iconPath: "assets/tabBar/setting.png",
      selectedIconPath: "assets/tabBar/setting_on.png",
      text: '设置',
    }]
  }
}
