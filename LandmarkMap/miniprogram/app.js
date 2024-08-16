// app.js
App({
  onload: function (option) {
    console.log("App onload");
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: "honglvjinling-0g7519ot1e8f297c",
        traceUser: true,
      });
    }
    this.globalData = {
      favoriteNum: 0,
      credits: 0,
    };
  },
});
