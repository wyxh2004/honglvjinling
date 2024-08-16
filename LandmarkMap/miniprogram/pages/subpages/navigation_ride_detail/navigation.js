var amapFile = require("../../utils/amap-wx");
var config = require("../../utils/config");

Page({
  data: {
    steps: {},
  },
  onLoad: function () {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getRidingRoute({
      origin: "116.481028,39.989643",
      destination: "116.434446,39.90816",
      success: function (data) {
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          that.setData({
            steps: data.paths[0].steps,
          });
        }
      },
      fail: function (info) {},
    });
  },
});
