// pages/index/index.js
Page({
    data: {
      markers: [
        {
          id: 1,
          longitude: 113.324520,
          latitude: 23.099994,
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
  