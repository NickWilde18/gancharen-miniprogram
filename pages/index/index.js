// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {},
  // 事件处理函数
  jump_test() {
    wx.redirectTo({
      url: "/pages/test_p/test_p"
    });
  },
  jump_search() {
    wx.navigateTo({
      url: "/pages/search/search"
    });
  },
  onLoad() {

  },
  onShareAppMessage() {},
  onShareTimeline() {},
})