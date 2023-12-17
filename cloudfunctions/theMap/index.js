// 在页面的 JavaScript 文件中调用 wx.getLocation
wx.getLocation({
  type: 'wgs84', // 返回 GPS 坐标，可以使用 wx.openLocation 显示地图
  success(res) {
    const latitude = res.latitude; // 纬度
    const longitude = res.longitude; // 经度

    console.log('当前位置的纬度：', latitude);
    console.log('当前位置的经度：', longitude);

    // 可以将获取到的位置信息传递到后端进行处理
    // 例如，通过网络请求将位置信息发送到服务器
    // 另外，你还可以在页面中使用获取到的位置信息进行其他处理
  },
  fail(err) {
    console.error('获取地理位置失败：', err);
  }
});

Page({
    data: {
      markers: [
        {
          id: 1,
          longitude: longitude,
          latitude: latitude,
          title: 'Marker 1',
          iconPath: 'minipeogram/images/search.png', // 自定义标记点图标
          width: 30,
          height: 30,
        },
      ],
    },
    controlTap: function (e) {
      // 处理地图控件点击事件
      console.log('Map control tapped:', e.controlId);
    },
  });
  