var amapFile = require("../../utils/amap-wx.js");
var config = require("../../utils/config.js");

Page({
  data: {
    searchHistory: [],
    spotList: [],
    total: 0,
    keyword: "",
    tips: {},
  },

  onLoad: function () {
    // 读取缓存
    let searchKeyArr = wx.getStorageSync("searchKeyArr") || null;
    if (searchKeyArr) {
      this.setData({
        searchHistory: searchKeyArr,
      });
    }
  },

  onChange(e) {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({
      key: key,
    });
    myAmapFun.getInputtips({
      keywords: e.detail,
      location: "",
      success: function (data) {
        // console.log("Success to get input tips");
        if (data && data.tips) {
          that.setData({
            tips: data.tips,
          });
        }
      },
    });
    this.setData({
      keyword: e.detail,
    });
  },

  onSearch() {
    // 保存历史搜索记录到缓存中
    let history = this.data.searchHistory || [];
    if (this.data.keyword === "") {
      wx.showToast({
        title: "请输入地名",
        icon: "none",
        duration: 2000,
      });
    } else {
      history.unshift(this.data.keyword);
      history = [...new Set(history)];
      history = history.slice(0, 10);
      this.setData({
        searchHistory: history,
      });
      wx.setStorageSync("searchKeyArr", history);
    }
  },

  bindSearch: function (e) {
    console.log(e);
    var keywords = e.target.dataset.keywords;
    var url = "../poi/poi?keywords=" + keywords;
    console.log(url);
    wx.redirectTo({
      url: url,
    });
  },

  removeHistory() {
    this.setData({
      noData: false,
      searchHistory: [],
      total: 0,
      keyword: "",
      spotList: [],
    });
    wx.removeStorageSync("searchKeyArr");
  },

  // 点击搜索历史
  onTapItem(e) {
    console.log(e.currentTarget.dataset.value);
    var keywords = e.currentTarget.dataset.value;
    this.setData({
      keyword: keywords,
    });
    var url = "../poi/poi?keywords=" + keywords;
    console.log(url);
    wx.redirectTo({
      url: url,
    });
  },
});
