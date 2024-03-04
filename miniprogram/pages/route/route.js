Page({
  onShareTimeline: function () {
    return {
      title: "分享到朋友圈标题",
    };
  },
  onShareAppMessage: function () {
    return {
      title: "分享标题",
      path: "/pages/index/index", // 分享的路径
    };
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  handleCollect: function (e) {
    wx.cloud.callFunction({
      name: "collectProduct",
      data: {
        productName: "地标名称",
      },
      success: (res) => {
        wx.showToast({
          title: "收藏成功",
          duration: 2000,
        });
      },
      fail: (err) => {
        wx.showToast({
          title: "收藏失败，请先登陆账号",
          icon: "none",
          duration: 2000,
        });
      },
    });
  },
  data: {
    routeList: [
      {
        name: "雨花台烈士陵园",
        imgUrl:
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
      },
      {
        name: "南京抗日航空烈士纪念馆",
        imgUrl:
          "https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/d04e698a692248a680adb5f57229a1b7~tplv-xv4ileqgde-resize-w:750.image",
      },
      {
        name: "南京民间抗日战争博物馆",
        imgUrl:
          "https://p3.ifengimg.com/a/2018_20/b62f91cf29ca710_size310_w600_h398.png",
      },
      {
        name: "云台山抗日烈士陵园",
        imgUrl:
          "https://mzt.jiangsu.gov.cn/picture/0/s_5536cb0133594837b83a7207f77ff0d3.jpg",
      },
      {
        name: "中国代表团，梅园新村",
        imgUrl:
          "https://www.rednanjing.cn/upload/adminredsource/20190917/9604b95f391cb67f7257088e076fa2c5.jpg",
      },
      {
        name: "渡江胜利纪念馆",
        imgUrl:
          "https://www.rednanjing.cn/upload/adminredsource/20190923/a1b45fb29ca01af50035a794a58866e0.jpg",
      },
      {
        name: "颐和路社区将军馆",
        imgUrl: "https://dimg04.c-ctrip.com/images/0103n120008g2tgn5FF20.jpg",
      },
      {
        name: "江北新区红色广场",
        imgUrl:
          "https://dimg04.c-ctrip.com/images/1me7112000cnyixfbFF45_R_800_10000_Q90.jpg?proc=source/tripcommunity",
      },
      {
        name: "浦口火车站",
        imgUrl:
          "https://p1.ifengimg.com/a/2017_08/5e9cc1f315803a3_size305_w1600_h1066.jpg",
      },
      {
        name: "桂子山烈士陵",
        imgUrl: "https://dimg04.c-ctrip.com/images/0102e120008h3y4cnCF1A.jpg",
      },
      {
        name: "侵华日军南京大屠杀草鞋峡遇难同胞纪念碑",
        imgUrl: "https://y2.ifengimg.com/a/2014_48/84b77acbe8cc845.jpg",
      },
      {
        name: "南京工运纪念馆",
        imgUrl:
          "https://jsnews.jschina.com.cn/2021/xjzgwxxd/dd_xjzg/njgy/202112/W020211231484763076511.jpg",
      },
      {
        name: "八路军驻京办事处纪念馆",
        imgUrl:
          " https://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/crop/xy/ai/w/500/h/333?appid=200698&url=https://pic.baike.soso.com/ugc/baikepic2/0/20160731004902-1522829910.jpg/0",
      },
      {
        name: "皖南事变三烈士墓",
        imgUrl:
          "https://www.rednanjing.cn/upload/ueditor/20190925/5d8b2da4cd0b3.jpg",
      },
      {
        name: "晓庄革命烈士纪念碑",
        imgUrl: " http://inews.gtimg.com/newsapp_bt/0/13975395981/641",
      },
      {
        name: "浦口革命烈士纪念碑",
        imgUrl:
          "https://p1-q.mafengwo.net/s17/M00/DF/7E/CoUBXl_V-mmAdsuuABKpqKgPnwI37.jpeg?imageMogr2%2Fthumbnail%2F%21750x562r%2Fgravity%2FCenter%2Fcrop%2F%21750x562%2Fquality%2F100",
      },
      {
        name: "竹镇市抗日民主政府旧址",
        imgUrl:
          "https://mzt.jiangsu.gov.cn/picture/0/s_6178f4511b28441f88c3794759d7c89d.jpg",
      },
    ],
  },
});
