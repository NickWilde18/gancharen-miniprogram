// app.js
App({
      globalData:{
        key:"key",
      },
      onLaunch() {
        // 展示本地存储能力
        //const logs = wx.getStorageSync('logs') || [],
        //logs.unshift(Date.now()),
        //wx.setStorageSync('logs', logs),
        wx.loadFontFace({
          family:'STZHONGS',
        //  source: 'url("https://1708v513b2.goho.co/STZHONGS.TTF")',
          source:'url("https://7869-xinhuocloud-9gyb31w57af6eb86-1317102184.tcb.qcloud.la/STZhongsong.woff?sign=9cae6d22f1339265cbdfa6069d3b3029&t=1677853211")',
          success:console.log,
          fail:console.log,
          global:'true',
        })
      },
    
})