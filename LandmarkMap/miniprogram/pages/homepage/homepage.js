var amapFile = require("../../../utils/amap-wx.js");
var config = require("../../../utils/config.js");

Page({
  onReady: function () {
    this.getLocation();
  },
  onLoad: function (options) {
    wx.request({
      url: "https://geoapi.qweather.com/v2/city/top?number=5&range=cn&key=e9e3d3f1e2a64fd49ac60e48b8a74bfa", //和风天气API
      header: {
        "content-type": "application/json", // 默认值
      },
      success(res) {
        console.log("网络请求成功之后获取到的数据", res);
        console.log("天气", res.data);
      },
    });
  },
  data: {
    latitude: "",
    longitude: "",
    scale: 15,
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
              latitude: 32.0896,
              longitude: 118.848,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "南京抗日航空烈士纪念馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 2,
              latitude: 31.973,
              longitude: 118.762,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "南京民间抗日战争博物馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 3,
              latitude: 32.04285361767196,
              longitude: 118.80150895663405,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "中国代表团，梅园新村",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 4,
              latitude: 32.062,
              longitude: 118.766,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "颐和路社区将军馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 5,
              latitude: 32.1196,
              longitude: 118.6927,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "江北新区红色广场",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 6,
              latitude: 32.0964,
              longitude: 118.7214,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "浦口火车站",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 7,
              latitude: 32.457,
              longitude: 118.933,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "桂子山烈士陵",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 8,
              latitude: 32.117,
              longitude: 118.771,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "侵华日军南京大屠杀草鞋峡遇难同胞纪念碑",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 9,
              latitude: 32.1248,
              longitude: 118.6935,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "南京工运纪念馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 10,
              latitude: 32.0648,
              longitude: 118.7827,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "八路军驻京办事处纪念馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 11,
              latitude: 32.0038,
              longitude: 118.7792,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "雨花台烈士陵园",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 12,
              latitude: 32.1212,
              longitude: 118.81,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "晓庄革命烈士纪念碑",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 13,
              latitude: 31.9857,
              longitude: 118.7714,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "皖南事变三烈士墓",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 14,
              latitude: 32.1273,
              longitude: 118.6431,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "浦口革命烈士纪念碑",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 15,
              latitude: 32.5328,
              longitude: 118.6724,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "竹镇市抗日民主政府旧址",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 16,
              latitude: 32.07432922594114,
              longitude: 118.73225748388194,
              width: 40,
              height: 40,
              iconPath: "/images/position.png",
              callout: {
                content: "渡江胜利纪念馆",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#FF4500",
                padding: 10,
                display: "ALWAYS",
              },
            },
            {
              id: 17,
              latitude: res.latitude,
              longitude: res.longitude,
              iconPath: "/images/my_position.png",
              width: 40,
              height: 40,
              callout: {
                content: "你所在的位置",
                color: "#FFFFFF",
                fontSize: 10,
                borderRadius: 10,
                bgColor: "#df3823",
                padding: 10,
                display: "ALWAYS",
              },
            },
          ],
        });
      },
      fail: (err) => {
        console.error("定位失败", err);
      },
    });
  },
  markerTap(e) {
    const markerId = e.markerId;
    console.log(markerId);
    this.data.markers.forEach((marker) => {
      if (marker.id == markerId) {
        wx.navigateTo({
          url: "/pages/subpages/card/card?card=" + marker.callout.content,
        });
      }
    });
  },
  onClick: function () {
    wx.navigateTo({
      url: "/pages/subpages/search/search",
    });
  },
});
