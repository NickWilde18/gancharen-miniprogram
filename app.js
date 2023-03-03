// app.js
App({
      
      onLaunch() {
        // 展示本地存储能力
        //const logs = wx.getStorageSync('logs') || [],
        //logs.unshift(Date.now()),
        //wx.setStorageSync('logs', logs),
        wx.loadFontFace({
          family:'STZHONGS',
        //  source: 'url("https://1708v513b2.goho.co/STZHONGS.TTF")',
          source:'url("https://7869-xinhuocloud-9gyb31w57af6eb86-1317102184.tcb.qcloud.la/STZHONGS.TTF?sign=84853f01dfc763743aadbf0f9b359707&t=1677851977")',
          success:console.log,
          fail:console.log,
          global:'true',
        })
      },
    
})