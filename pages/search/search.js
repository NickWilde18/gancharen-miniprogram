// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne: {},
    keywords: "",
    /*name*/
    keyeffs: "",
    total_number:0,
    /*effect*/
    checked_or: false,
    checked_and: true,
    words: ">>点此可查看我们的所有产品哦~😉<<",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.init();
    // this.search_result();
  },
  handle_input_name(e) {
    this.setData({
      keywords: e.detail.value,
    });
    if ((this.data.keywords != "") || (this.data.keyeffs != "")) {
      this.setData({
        checked_and:true,
        checked_or:false,
      });
      this.search_result();
    } else {
      if ((this.data.keywords == "") && (this.data.keyeffs == "")) {
        this.setData({
          keywords: "###",
          keyeffs: "",
          checked_and: true,
          checked_or: false,
        });
        this.search_result();
        this.setData({
          keywords: "",
          keyeffs: "",
        });
      }
    };
  },
  handle_input_eff(e) {
    this.setData({
      keyeffs: e.detail.value,
    });
    if ((this.data.keywords != "") || (this.data.keyeffs != "")) {
      this.setData({
        checked_and:true,
        checked_or:false,
      });
      this.search_result();
    } else {
      if ((this.data.keywords == "") && (this.data.keyeffs == "")) {
        this.setData({
          keywords: "###",
          keyeffs: "",
          checked_and: true,
          checked_or: false,
        });
        this.search_result();
        this.setData({
          keywords: "",
          keyeffs: "",
        });
      }
    };
  },
  async search_result() {
    const db = wx.cloud.database().collection('flowertea');
    const _ = wx.cloud.database().command;
    if (this.data.checked_or) {
      var result = db.where(_.or([{
        name: {
          $regex: '.*' + this.data.keywords + '.*',
          $options: 'i'
        }
      }, {
        eff: {
          $regex: '.*' + this.data.keyeffs + '.*',
          $options: 'i'
        }
      }]));

    } else
    if (this.data.checked_and) {
      var result = db.where(_.and([{
        name: {
          $regex: '.*' + this.data.keywords + '.*',
          $options: 'i'
        }
      }, {
        eff: {
          $regex: '.*' + this.data.keyeffs + '.*',
          $options: 'i'
        }
      }]));
    };
    let count = result.count();
    count = (await count).total;
    console.log(count);
    this.setData({
      total_number:count,
    });
    let all = [];
    for (let i = 0; i < count; i += 20) {
      let list = await result.skip(i).get();
      all = all.concat(list.data);
    };
    this.setData({
      ne: all,
    });
  },
  or_t() {
    this.setData({
      checked_and: !this.data.checked_and,
      checked_or: !this.data.checked_or,
    });
    this.search_result();
  },
  and_t() {
    this.setData({
      checked_and: !this.data.checked_and,
      checked_or: !this.data.checked_or,
    });
    this.search_result();
  },
  jump_list() {
    wx.navigateTo({
      url: '/pages/list/list',
    })
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