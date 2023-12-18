Page({
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