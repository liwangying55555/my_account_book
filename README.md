# my_account_book
个人记账时间轴记账小程序，仿口袋记账 :memo:

### 技术栈：

taro + vue3.0 + nodejs + mysql

### 开发初衷

1. 考古N年前的念头，据说是这样的，无良厂商，开屏超长广告，超长等待时间，各种优化，炒鸡影响体验感。
2. 考古技术选型，凉凉的ng，既然要跟随潮流，那就直接上vue3.0，想怎么来就怎么来，就是要任性。
3. 受限于技术，受限于技术，受限于技术...如果打包成app，其实底层还是个h5，没有多大意义...所以，干脆换成小程序吧，造吧！！！！！

### 暂定需求

版本 0.0.1 :one:
暂定需求于2020.12.31之前完成第一part

```
1. 明细展示： 纵向时间轴 支出在右 收入在左
2. 明细新增： icon 数量内容固定 收入和支出顶部tab切换
3. 明细阶段性统计 
4. 明细阶段性趋势一览
5. 每天总计金额以日历的形式展示（月）
6. 支持导入excel转化数据，导出excel,格式和口袋记账保持一致，万一自己写的太恶心了，不想用，还可以保证数据互通...
7. 换肤功能，支持自定义背景即可
```

### 后端支持

后端沿用nodejs
1. 搞定基础的登录注册，身份认证
2. 数据存储?????小程序的话，本地缓存不太现实。。。远程数据同步太影响体验，待定。。
3. 数据常规同步
4. 服务器！！！！！！！！域名！！！！！！:wink: