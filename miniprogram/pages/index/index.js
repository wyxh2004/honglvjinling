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
      url: "/pages/search/search",
    });
  },
  onLoad: function () {
    wx.loadFontFace({
      family: "myfont", // 字体名称
      source: url(
        "https://wyxh-1322159997.cos.ap-nanjing.myqcloud.com/myfont.ttf"
      ), // 替换成你的字体文件的远程 URL
      success: console.log,
      fail: console.error,
    });
  },
});
