const QQMapWX = require("../../../utils/qqmap-wx-jssdk.js");
var qqmapsdk;

Page({
    // TODO: 全局搜索历史
    onLoad: function () {
      qqmapsdk = new QQMapWX({
        key: '2ONBZ-SHJWC-SCS2Q-A77SB-ZJJJ2-OKBTC'
      });
      // const searchHistory = wx.getStorageSync("searchHistory") || [];
      // this.setData({ searchHistory });
    },

    // 处理输入事件
    onInput: function (e) {
      this.setData({
        inputValue: e.detail.value,
      });
    },

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
        "钟山",
      ], // 猜你想搜数据,
      latitude: 32.0603,
      longitude: 118.7969,
    },

  // handleClick: function () {
  //   let plugin = requirePlugin("routePlan");
  //   let key = "2ONBZ-SHJWC-SCS2Q-A77SB-ZJJJ2-OKBTC"; //使用在腾讯位置服务申请的key
  //   let referer = "红旅金陵"; //调用插件的app的名称
  //   let mode = "transit"; //导航类型
  //   let endPoint = JSON.stringify({
  //     //终点
  //     name: it,
  //     latitude: 39.89631551,
  //     longitude: 116.323459711,
  //   });
  //   wx.navigateTo({
  //     url:
  //       "plugin://routePlan/index?key=" +
  //       key +
  //       "&referer=" +
  //       referer +
  //       "&endPoint=" +
  //       endPoint +
  //       "&mode=" +
  //       mode,
  //   });
  // },

  getAddress: function (address) {
    var that = this; // 保存上下文引用
    qqmapsdk.geocode({
      address: address,
      success: function (res) {
        that.addressCoordinates = res.result;
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  
  // 处理搜索按钮点击事件
  handleSearchLocation: function () {
    var that = this; // 保存上下文引用
    const inputValue = this.data.inputValue;

    // 检查用户是否输入了地名
    if (inputValue === "") {
      wx.showToast({
        title: "请输入地名",
        icon: "none",
        duration: 2000,
      });
      // this.setData({
      //   searchHistory: [...this.data.searchHistory],
      // });
    } else {

      // TODO: 方案待选
      // wx.setStorageSync("searchHistory", this.data.searchHistory);

      qqmapsdk.geocoder({
        address: inputValue,
        success: (res) => {
          this.setData({
            searchHistory: [...this.data.searchHistory, inputValue],
            latitude: res.result.location.lat,
            longitude: res.result.location.lng,
          });
        },
        fail: (res) => {
          console.log(res);
        }
      });

      let plugin = requirePlugin("routePlan");
      let key = "2ONBZ-SHJWC-SCS2Q-A77SB-ZJJJ2-OKBTC"; //使用在腾讯位置服务申请的key
      let referer = "红旅金陵"; //调用插件的app的名称
      let mode = "transit"; //导航类型
      let endPoint = JSON.stringify({
        //终点
        name: inputValue,
        latitude: this.data.latitude,
        longitude: this.data.longitude,
      });
      wx.navigateTo({
        url:
          "plugin://routePlan/index?key=" +
          key +
          "&referer=" +
          referer +
          "&endPoint=" +
          endPoint +
          "&mode=" +
          mode,
      });
    }

    this.setData({
      inputValue: "",
    });
  },
});
