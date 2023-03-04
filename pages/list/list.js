// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    wx.showLoading({
      title: '加载中',
    });
    wx.cloud.init();
    const db = wx.cloud.database();
    let count = await db.collection('flowertea').count();
    count = count.total;
    let all = [];
    for (let i = 0; i < count; i += 20) {
      let list=await db.collection('flowertea').skip(i).get();
      all=all.concat(list.data);
    };
    this.setData({
      ne:all,
    });
    wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  onShareTimeline() {},
})