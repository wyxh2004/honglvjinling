Page({
  onShareAppMessage: function () {
    return {
      title: '分享给好友',
      path: '/pages/index/index', // 分享的路径
      image: '../../images/logo.png', // 分享的图片
    };
  },
  data: {
    locationName: '',  // 接收传递的地名参数
  },

  onLoad: function (options) {
    // 从参数中获取地名并更新页面数据
    const keyword = options.keyword || '';
    this.setData({
      locationName: decodeURIComponent(keyword),
    });
  }
});