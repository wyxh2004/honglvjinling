Page({
  data: {
    locationName: '',  // 接收传递的地名参数
  },

  // wx.showToast({
  //   title: '加载中',
  //   icon: 'loading',
  //   duration: 10000,
  // }),

  onLoad: function (options) {
    // 从参数中获取地名并更新页面数据
    const inputValue = options.inputValue || '';
    this.setData({
      locationName: decodeURIComponent(inputValue),
    });
  }
});