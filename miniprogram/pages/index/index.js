Page({
  onShareAppMessage: function () {
    return {
      title: "分享给好友",
      path: "/pages/index/index", // 分享的路径
      image: "../../images/logo.png", // 分享的图片
    };
  },
  onReady: function () {
    this.getLocation();
  },
  data: {
    latitude: "",
    longitude: "",
    scale: 18,
    markers: [], // 地图标记点
    searchKeyword: "", // 用户输入的地名
    buttons: [{ text: "取消" }, { text: "确认" }],
  },
  getLocation: function () {
    wx.getLocation({
      type: "wgs84",
      success: (res) => {
        console.log("定位成功", res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [
            {
              id: 1,
              latitude: 32.049,
              longitude: 118.61,
              width: 34,
              height: 34,
              iconPath: "/images/position.png",
            },
            {
              id: 2,
              latitude: 32.049,
              longitude: 118.61,
              width: 34,
              height: 34,
              iconPath: "/images/position.png",
            },
            {
              id: 3,
              latitude: 32.049,
              longitude: 118.61,
              width: 34,
              height: 34,
              iconPath: "/images/position.png",
            },
            {
              id: 4,
              latitude: 32.049,
              longitude: 118.61,
              width: 34,
              height: 34,
              iconPath: "/images/position.png",
            },
            {
              id: 5,
              latitude: 32.049,
              longitude: 118.61,
              width: 34,
              height: 34,
              iconPath: "/images/position.png",
            },
            {
              id: 6,
              latitude: res.latitude,
              longitude: res.longitude,
              iconPath: "/images/position.png",
              width: 40,
              height: 40,
            },
          ],
        });
      },
      fail: (err) => {
        console.error("定位失败", err);
      },
    });
  },
  goToSearch: function () {
    wx.navigateTo({
      url: "/pages/subpages/search/search",
    });
  },
});
