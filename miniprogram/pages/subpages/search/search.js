Page({
  data: {
    inputValue: "",
    searchHistory: [], // 搜索历史数据
    guessWhatToSearch: [
      "文学客厅",
      "红楼梦",
      "玄武湖",
      "栖霞山",
      "六朝",
      "设计廊",
      "王安石",
      "秦淮",
      "民国建筑",
      "城墙",
      "美术馆",
      "李白",
      "儒林外史",
      "乌衣巷",
      "鸡鸣寺",
      "朱元璋",
      "雨花台",
      "谢灵运",
      "金陵",
      "文心雕龙",
      "颜真卿",
      "南京博物院",
      "夫子庙",
      "钟山风景名胜区",
    ], // 猜你想搜数据
  },
  // TODO: 全局搜索历史
  // onLoad: function () {
  //   const searchHistory = wx.getStorageSync("searchHistory") || [];
  //   this.setData({ searchHistory });
  // },
  onShareAppMessage: function () {
    return {
      title: "分享标题",
      path: "/pages/index/index", // 分享的路径
      image: "../../images/logo.png", // 分享的图片
    };
  },
  // 处理输入事件
  onInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  // 处理搜索按钮点击事件
  searchLocation: function () {
    const inputValue = this.data.inputValue;

    // 检查用户是否输入了地名
    if (inputValue === "") {
      wx.showToast({
        title: "请输入地名",
        icon: "none",
        duration: 2000,
      });
      this.setData({
        searchHistory: [...this.data.searchHistory],
      });
    } else {
      this.setData({
        searchHistory: [...this.data.searchHistory, inputValue],
      });
      // TODO: 方案待选
      // wx.setStorageSync("searchHistory", this.data.searchHistory);
      // 跳转到地名页面，并将地名作为参数传递
      let plugin = requirePlugin("routePlan");
      let key = "2ONBZ-SHJWC-SCS2Q-A77SB-ZJJJ2-OKBTC"; //使用在腾讯位置服务申请的key
      let referer = "红旅金陵"; //调用插件的app的名称
      let endPoint = JSON.stringify({
        //终点
        name: inputValue,
        latitude: 39.89631551,
        longitude: 116.323459711,
      });
      wx.navigateTo({
        url:
          "plugin://routePlan/index?key=" +
          key +
          "&referer=" +
          referer +
          "&endPoint=" +
          endPoint,
      });
    }

    this.setData({
      inputValue: "",
    });
  },
});
