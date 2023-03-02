// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {},
  // 事件处理函数
  jump_test() {
    wx.navigateTo({
      url: "/pages/test_p/test_p"
    });
  },
  onLoad() {
    wx.loadFontFace({
      family: 'STZHONGS',
      source: 'url("https://1708v513b2.goho.co/STZHONGS.TTF")',
      success: console.log,
      fail: console.log
    })
  },
  onShareAppMessage() {},
  onShareTimeline() {},
})