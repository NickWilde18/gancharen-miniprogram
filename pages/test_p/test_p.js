// pages/test_p/test_p.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q1a: "",
    q2a: "",
    q3a: "",
    q4a: "",
    q5a: "",
    q6a: "",
    q7a: "",
  },
  Q1Change(e) {
    this.setData({
      q1a: e.detail.value,
    })
  },
  Q2Change(e) {
    this.setData({
      q2a: e.detail.value,
    })
  },
  Q3Change(e) {
    this.setData({
      q3a: e.detail.value,
    })
  },
  Q4Change(e) {
    this.setData({
      q4a: e.detail.value,
    })
  },
  Q5Change(e) {
    this.setData({
      q5a: e.detail.value,
    })

  },
  Q6Change(e) {
    this.setData({
      q6a: e.detail.value,
    });
    if (this.data.q6a == 'N') {
      this.setData({
        q7a: "",
      })
    }
  },
  Q7Change(e) {
    if (this.data.q6a == 'N') {
      this.setData({
        q7a: e.detail.value,
      })
    }
  },
  sta() {
    var final_answer = this.data.q1a + this.data.q2a + this.data.q3a + this.data.q4a;
    if (this.data.q6a == "Y") {
      this.setData({
        q7a: "Z"
      })
    };
    if (this.data.q5a == "G") {
      wx.showToast({
        title: '分析中',
        icon: 'loading',
        duration: 350,
      });
      var url = "/pages/result_girl/result_girl?answer=" + final_answer + "&extra=" + this.data.q5a + this.data.q6a + this.data.q7a;
      setTimeout(function () {
        wx.redirectTo({
          url: url,
        });
      }, 350);
    } else {
      wx.showToast({
        title: '分析中',
        icon: 'loading',
        duration: 350,
      });
      var url = "/pages/result_boy/result_boy?answer=" + final_answer + "&extra=" + this.data.q5a + this.data.q6a + this.data.q7a;
      setTimeout(function () {
        wx.redirectTo({
          url: url,
        });
      }, 350);
    };

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      q1a: "",
      q2a: "",
      q3a: "",
      q4a: "",
      q5a: "",
      q6a: "",
      q7a: "",
    });
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
  onShareTimeline() {

  },
})