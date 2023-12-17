Page({
    data: {
      latitude: 32.0595,      // 初始化纬度
      longitude: 118.5904,     // 初始化经度
      scale: 15,        // 缩放级别
      markers: [],      // 地图标记点
    },
  
    onReady: function () {
      // 在页面加载时获取用户当前位置并更新地图数据
      this.getLocation();
    },
  
    // 获取用户当前位置
    getLocation: function () {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          const latitude = res.latitude;
          const longitude = res.longitude;
  
          this.setData({
            latitude,
            longitude,
            markers: [{  // 在地图上标记用户当前位置
              id: 1,
              latitude,
              longitude,
              title: '我的位置',
              iconPath: '/images/local.png',  // 自定义标记图标路径
              width: 40,
              height: 40,
            }],
          });
        },
        fail: (err) => {
          console.error('获取地理位置失败：', err);
        }
      });
    },
  
    // 处理地图拖动事件
    regionchange: function (e) {
      if (e.type === 'end') {
        // 在地图拖动结束后，可以执行一些操作
        console.log('地图拖动结束');
      }
    }
});
  
