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
  data: {
    routeList: [
      {
        name: "南京抗日航空烈士纪念馆",
        imgUrl: "https://example.com/zhuangshi.jpg",
      },
      {
        name: "南京民间抗日战争博物馆",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "云台山抗日烈士陵园",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "中国代表团，梅园新村",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "渡江胜利纪念馆",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "颐和路社区将军馆",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "江北新区红色广场",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "浦口火车站",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "桂子山烈士陵",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "侵华日军南京大屠杀草鞋峡遇难同胞纪念碑",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "南京工运纪念馆",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "八路军驻京办事处纪念馆",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "晓庄革命烈士纪念碑",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "皖南事变三烈士墓",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "浦口革命烈士纪念碑",
        imgUrl: "https://example.com/gongwu.jpg",
      },
      {
        name: "竹镇市抗日民主政府旧址",
        imgUrl: "https://example.com/gongwu.jpg",
      },
    ],
  },
});
