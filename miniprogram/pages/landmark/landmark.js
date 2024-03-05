Page({
  data: {
    landmarkList: [
      {
        name: "孙津川烈士墓",
        imgUrl:
          "https://p.ananas.chaoxing.com/star3/origin/5dc8e51aab1e31d0158e77104926d208.png",
      },
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
          "https://mzt.jiangsu.gov.cn/picture/0/s_5536cb0133594837b83a7207f77ff0d3.jpg",
      },
      {
        name: "云台山抗日烈士陵园",
        imgUrl:
          "https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png",
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
    ],
  },
  goToSearch: function () {
    wx.navigateTo({
      url: "/pages/subpages/search/search",
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
});
