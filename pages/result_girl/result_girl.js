// pages/result/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    final_answer: "",
    description: "",
    name: "",
    recommend1: "",
    recommend2: "",
    recommend1_p: "",
    recommend2_p: "",
    extra_p: "",
    recommend1_w: "",
    recommend2_w: "",
    extra_w: "",
    res: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.answer + options.extra);
    wx.showLoading({
      title: '加载中',
    });
    wx.cloud.init();
    wx.cloud.database().collection('goodslist').doc(options.answer).get({
      success: (data) => {
        this.setData({
          res: data.data
        });
        wx.hideLoading();
      },
      fail: console.log,
    });

    setTimeout(() => {
      var res = this.data.res;
      console.log(res);

      if (options.extra[0] == 'G') {

        this.setData({
          name: res["girl_name"],
          description: res["desg"],
        })
      } else {
        this.setData({
          name: res["boy_name"],
          description: res["desb"],
        })
      };

      this.setData({
        final_answer: options.answer,
        recommend1: res["rec1"],
        recommend2: res["rec2"],
        recommend1_p: res["rec1p"],
        recommend2_p: res["rec2p"],
        recommend1_w: res["rec1w"],
        recommend2_w: res["rec2w"],
      });

      if ((options.answer == "INTP") || (options.answer == "ESFJ")) {
        if (options.extra[0] == "B") {
          this.setData({
            recommend1: res["rec1b"],
            recommend2: res["rec2b"]
          })
        } else {
          this.setData({
            recommend1: res["rec1g"],
            recommend2: res["rec2g"]
          })
        }

      };
      if (options.extra[1] == "Y") {
        this.setData({
          extra_p: "红参补元气血茶",
          extra_w: "鹿川有茶系列 / 桃喜系列 / 轻食养生系列",
          extra: "手脚发凉，喜热怕凉，容易脱发，这可能是阳虚体质的表现哦！红参补元气血茶，从内调养，慢慢的看到改变~",
        })
      }
      if ((options.extra[1] == "N") && (options.extra[2] == "Y")) {
        this.setData({
          extra_p: "石斛熬夜元气茶",
          extra_w: "桃喜系列 / 轻食养生系列",
          extra: "体型偏瘦，睡眠较差，面色苍暗，焦虑消极，这可都是气郁结的表征。石斛熬夜元气茶，慢慢的看到改变~",
        })
      }
    }, 800);
  },
  back_index() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  exit() {
    wx.exitMiniProgram();
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