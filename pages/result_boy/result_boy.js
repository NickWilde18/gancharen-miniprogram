// pages/result/result.js
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
    extra: "",
    extra_p: "",
    recommend1_w: "",
    recommend2_w: "",
    extra_w: "",
    dic: {
      "ISTJ": {
        "girl_name": "SOLO女孩",
        "boy_name": "SOLO男孩",
        "desg": "是你嘛，SOLO女孩？认认真真，有开始就有结束。",
        "desb": "是你嘛，SOLO男孩？认认真真，有开始就有结束。",
        "rec1p": "玫瑰桑葚茶",
        "rec1w": "鹿川有茶系列 / 桃喜系列 / 轻食养生礼盒系列",
        "rec1": "玫瑰桑葚茶，暖暖哒很贴心。工作闲暇时刻，一口玫瑰香气，瞬间充能！",
        "rec2": "清喉润润茶，给你一口清新的味道！顺利地解决口腔的不适感~ 天然成分，精心配制，轻轻松松，润润喉咙~",
        "rec2p": "清喉润润茶",
        "rec2w": "桃喜系列 / 轻食养生礼盒系列",
      },
      "ISFJ": {
        "girl_name": "兔兔女孩",
        "boy_name": "暖暖男孩",
        "desb": "勤勤恳恳，温和，擅长协助。",
        "desg": "勤勤恳恳，温和，擅长协助。",
        "rec1p": "茉莉茉莉/茉香奇异果",
        "rec1w": "鹿川有茶系列 / 桃喜系列 / 半岳有茶系列 / 轻食养生系列",
        "rec2w": "桃喜系列 / 轻食养生系列",
        "rec2p": "素颜晚A茶",
        "rec1": "茉莉茉莉，温柔美丽！清香氤氲之中，这又是谁的白月光呢？",
        "rec2": "素颜晚A茶，时尚的外观，而且还有着优雅的香气和滋味，如一首优雅的melody一般伴你安然入睡。",
      },
      "INFJ": {
        "girl_name": "兰心女孩",
        "boy_name": "高智男孩",
        "desb": "对人的内心观察思考。",
        "desg": "对人的内心观察思考。",
        "rec1p": "木瓜火龙果",
        "rec2p": "湿气拜拜茶",
        "rec1w": "鹿川有茶系列 / 半岳有茶系列 / 轻食养生系列",
        "rec2w": "桃喜系列 / 半岳有茶 / 轻食养生系列",
        "rec1": "木瓜火龙果，像一壶佳酿，她的智慧正如茶中的醇香甜美一般，丝丝缕缕熨入心。",
        "rec2": "湿气拜拜茶，“暑月水涨，用之实佳。” 以此沏茶，气清暑而不伤也。"
      },
      "INTJ": {
        "girl_name": "先知女孩",
        "boy_name": "先知男孩",
        "desb": "全面整合，展示未来。",
        "desg": "全面整合，展示未来。",
        "rec1p": "荷叶清清茶",
        "rec2p": "熬夜明目/养肝/元气茶",
        "rec1w": "鹿川有茶系列 / 桃喜系列 / 轻食养生系列",
        "rec2w": "鹿川有茶系列 / 桃喜系列 / 半岳有茶系列 / 轻食养生系列",
        "rec1": "荷叶清清茶，清醒而自知地为自己的未来奋斗！",
        "rec2": "熬夜系列茶，唤醒睡眠和健康的平衡。缓解压力，保持清醒、充满活力。报复性熬夜时，选择熬夜明目茶作伴，熬夜抗氧化两不误，效率健康我都要！"
      },
      "ISTP": {
        "girl_name": "若水女孩",
        "boy_name": "若水男孩",
        "desb": "富有逻辑，对环境适应能力强。",
        "desg": "富有逻辑，对环境适应能力强。",
        "rec1w": "鹿川有茶系列 / 轻食养生系列",
        "rec2w": "鹿川有茶系列 / 半岳有茶系列 / 轻食养生系列",
        "rec1p": "蓝莓蜜桃果茶",
        "rec2p": "青桔柠檬茶",
        "rec1": "蓝莓蜜桃果茶，她可以是清醒理智的蓝莓，也可以是甜美香醇的蜜桃，就如水一般潺潺流淌生活之中……",
        "rec2": "青桔柠檬茶。“我曾被梦想捕获，就像一条鱼被梦想捕获。” 青桔与柠檬迸发的口感，如同那年青涩的梦。"
      },
      "ISFP": {
        "girl_name": "檀香女孩",
        "boy_name": "檀香男孩",
        "desb": "温暖感性、谦虚。",
        "desg": "温暖感性、谦虚。",
        "rec1p": "白里透红茶",
        "rec2p": "女神气血茶",
        "rec1w": "鹿川有茶系列 / 半岳有茶系列 / 桃喜系列 / 轻食养生系列",
        "rec2w": "鹿川有茶系列 / 半岳有茶系列 / 桃喜系列 / 轻食养生系列",
        "rec1": "白里透红茶，谦虚内敛之下，满满的都是暖暖的内心哦~",
        "rec2": "女神气血茶, 阳光，雨露，花草，茶叶，温暖的感觉在身体中展开蔓延生长。"
      },
      "INFP": {
        "girl_name": "四月女孩",
        "boy_name": "四月男孩",
        "desb": "想要建立一个理想世界。世界是什么样子呢? ",
        "desg": "想要建立一个理想世界。世界是什么样子呢? ",
        "rec1p": "西柚薄荷茶/西柚百香果",
        "rec2p": "柠檬青桔百香果",
        "rec1w": "鹿川有茶系列 / 轻食养生系列 / 半岳有茶系列",
        "rec2w": "半岳有茶系列 / 轻食养生系列",
        "rec1": "西柚茶。理想的应该像西柚百香果一样美好吧~",
        "rec2": "柠檬青桔百香果，柠檬的酸，青桔的甜，百香果的香，交织为轻轻柔柔的想念~"
      },
      "INTP": {
        "girl_name": "咏絮女孩",
        "boy_name": "咏絮男孩",
        "desb": "有观点、有评论：优秀战略家。",
        "desg": "有观点、有评论：优秀战略家。",
        "rec1p": "夏日咸柠茶/解腻咸柠茶/解腻快乐咸柠茶",
        "rec2p": "凤梨百香果茶",
        "rec1w": "鹿川有茶系列 / 轻食养生系列 / 半岳有茶系列",
        "rec2w": "鹿川有茶系列 / 半岳有茶系列 / 轻食养生系列",
        "rec1g": "咸柠茶。不同于甜系女孩，一颗敏锐聪慧的盐系内心似乎更符合她们的内心呢。",
        "rec1b": "咸柠茶。不同于甜系男孩，一颗敏锐聪慧的盐系内心似乎更符合他们的内心呢。",
        "rec2b": "凤梨百香果茶，酸甜可口，果肉饱满的凤梨+香浓百香果味结合起来，清新自然，不落俗套。",
        "rec2g": "凤梨百香果茶，酸甜可口，果肉饱满的凤梨+香浓百香果味结合起来，清新自然，不落俗套。"
      },
      "ESTP": {
        "girl_name": "盲盒女孩",
        "boy_name": "盲盒男孩",
        "desb": "偏爱朋友、运动、事物等各种各样事物，爱体验生活。",
        "desg": "偏爱朋友、运动、事物等各种各样事物，爱体验生活。",
        "rec1p": "茉香奇异果",
        "rec2p": "洋参安心茶",
        "rec1w": "鹿川有茶系列 / 半岳有茶系列 / 轻食养生系列",
        "rec2w": "桃喜系列 / 轻食养生系列",
        "rec1": "茉香奇异果。茉香的奇异果?很好，茶茶，你成功吸引了我的注意~",
        "rec2": "洋参安心茶，旧尾巴风一样地刮过的大金喇叭和咿咿呀呀地唱着古老歌曲的味道，你愿意尝试一下吗？"
      },
      "ESFP": {
        "girl_name": "活力女孩",
        "boy_name": "活力男孩",
        "desb": "善于活跃氛围，待人友好。",
        "desg": "善于活跃氛围，待人友好。",
        "rec1p": "金桔百香果",
        "rec2p": "静心晚安茶",
        "rec1w": "半岳有茶系列 / 轻食养生系列",
        "rec2w": "桃喜系列 / 轻食养生系列",
        "rec1": "金桔百香果，酸甜的风味在口腔中活力蹦开，正如她在人群中带来的氛围一般~",
        "rec2": "静心晚安茶，不知道未来自己还会走多久，但是如果有一天真的累了、倦了，那就先晚安，以后再继续往前走下去吧。"
      },
      "ENFP": {
        "girl_name": "新月女孩",
        "boy_name": "新月男孩",
        "desb": "外向热情，热衷于构建新关系。",
        "desg": "外向热情，热衷于构建新关系。",
        "rec1p": "西柚青桔百香果",
        "rec2p": "六宝补元茶",
        "rec1w": "半岳有茶系列 / 轻食养生系列",
        "rec2w": "鹿川有茶系列 / 桃喜系列 / 轻食养生系列",
        "rec1": "西柚青桔百香果，甜美的雪梨香气之中，清新的金桔丝丝缕缕，完美交织。",
        "rec2": "六宝补元茶。龙团凤饼皆珍品，玉液琼浆亦绝品。名茶远胜龙团凤饼，六宝补元茶极工。",
      },
      "ENTP": {
        "girl_name": "泛舟女孩",
        "boy_name": "泛舟男孩",
        "desb": "丰富想象，愿意尝试新事物。",
        "desg": "丰富想象，愿意尝试新事物。",
        "rec1p": "西柚青桔百香果",
        "rec2p": "轻糖缓衰茶",
        "rec1w": "半岳有茶系列 / 轻食养生系列",
        "rec2w": "轻食养生系列 / 桃喜系列",
        "rec1": "西柚青桔百香果。西柚，青桔与百香果! 何不一试?",
        "rec2": "轻糖缓衰茶，绿茶的清香及熟茶醇厚、甘醇的口感，给生活加点糖~",
      },
      "ESTJ": {
        "boy_name": "探竹男孩",
        "girl_name": "探竹女孩",
        "desb": "务实; 实用; 实事求是。",
        "desg": "务实; 实用; 实事求是。",
        "rec1p": "洛神山楂茶",
        "rec2p": "五白杏仁露",
        "rec1w": "鹿川有茶系列 / 轻食养生系列",
        "rec2w": "鹿川有茶系列 / 轻食养生系列 / 桃喜系列",
        "rec1": "洛神山楂茶，安神养颜，有feedback，才是好的。",
        "rec2": "五白杏仁露，白到发光，其实很简单哦~",
      },
      "ESFJ": {
        "girl_name": "余香女孩",
        "boy_name": "余香男孩",
        "desb": "亲和; 显示; 奉献。",
        "desg": "亲和; 显示; 奉献。",
        "rec1p": "枸杞桑葚晚A茶/素颜晚A茶/抗衰晚A茶",
        "rec2p": "乌梅桑葚茶",
        "rec1w": "鹿川有茶系列 / 轻食养生系列 / 桃喜系列 / 半岳有茶系列",
        "rec2w": "鹿川有茶系列 / 轻食养生系列 / 桃喜系列",
        "rec1g": "晚安茶系列。甜甜的女孩，忙碌一天后，也要进入甜甜的梦乡。",
        "rec1b": "晚安茶系列。甜甜的男孩，忙碌一天后，也要进入甜甜的梦乡。",
        "rec2g": "乌梅桑葚茶，色如樱桃而味似梅，甘酸甘寒，回味不尽。",
        "rec2b": "乌梅桑葚茶，色如樱桃而味似梅，甘酸甘寒，回味不尽。",
      },
      "ENFJ": {
        "girl_name": "竹生女孩 ",
        "boy_name": "竹生男孩 ",
        "desb": "力图他人成长；注重协作。",
        "desg": "力图他人成长；注重协作。",
        "rec1p": "刺梨柠檬早C茶/米白早C茶/美白早C茶",
        "rec2p": "雪梨海底椰",
        "rec1w": "鹿川有茶系列 / 轻食养生系列 / 桃喜系列 / 半岳有茶系列",
        "rec2w": "轻食养生系列 / 桃喜系列",
        "rec1": "早C茶系列。在成长的道路上， 大家可都不要掉队呀! 一杯美美早C，开启元气一天！",
        "rec2": "雪梨海底椰。雪梨和海底椰椰，微弱的颗粒感中带着回味无穷的醇香甜美。",
      },
      "ENTJ": {
        "boy_name": "凌波男孩",
        "girl_name": "凌波女孩",
        "desb": "构象蓝图; 活跃前进！",
        "desg": "构象蓝图; 活跃前进！",
        "rec1p": "解酸减痛茶",
        "rec2p": "桃胶雪燕羹",
        "rec1w": "轻食养生系列 / 桃喜系列",
        "rec2w": "鹿川有茶系列 / 轻食养生系列 / 桃喜系列",
        "rec1": "解酸减痛茶。心理前进的同时，也别忘记品一盏香茗，等等身体哦~",
        "rec2": "桃胶雪燕羹，软糯丝滑，美颜秘方你get了吗",
      },
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.loadFontFace({
      family: 'STZHONGS',
      source: 'url("https://1708v513b2.goho.co/STZHONGS.TTF")',
      success: console.log
    });

    if (options.extra[0] == 'G') {
      this.setData({
        name: this.data.dic[options.answer]["girl_name"],
        description: this.data.dic[options.answer]["desg"],
      })
    } else {
      this.setData({
        name: this.data.dic[options.answer]["boy_name"],
        description: this.data.dic[options.answer]["desb"],
      })
    };

    this.setData({
      final_answer: options.answer,
      recommend1: this.data.dic[options.answer]["rec1"],
      recommend2: this.data.dic[options.answer]["rec2"],
      recommend1_p: this.data.dic[options.answer]["rec1p"],
      recommend2_p: this.data.dic[options.answer]["rec2p"],
      recommend1_w: this.data.dic[options.answer]["rec1w"],
      recommend2_w: this.data.dic[options.answer]["rec2w"],
    });

    if ((options.answer == "INTP") || (options.answer == "ESFJ")) {
      if (options.extra[0] == "B") {
        this.setData({
          recommend1: this.data.dic[options.answer]["rec1b"],
          recommend2: this.data.dic[options.answer]["rec2b"]
        })
      } else {
        this.setData({
          recommend1: this.data.dic[options.answer]["rec1g"],
          recommend2: this.data.dic[options.answer]["rec2g"]
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
  onShareAppMessage() {
  },
  onShareTimeline(){

  },
})