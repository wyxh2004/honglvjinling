const app = getApp();
const apis = app.apis;
const utils = app.utils;
Page({
  data: {
    userInfo: {},
  },
  gotoProfile() {
    wx.navigateTo({
      url: "/pages/subpages/register/register",
    });
  },
  // 去登陆
  toLogin() {
    let _this = this;
    wx.getUserProfile({
      desc: "获取你的昵称、头像",
      success: (res) => {
        let userInfo = res.userInfo;
        _this.setData({
          userInfo: userInfo,
        });
        wx.setStorageSync("userInfo", userInfo);
      },
      fail: (res) => {
        //拒绝授权
        wx.showToast({
          title: "您拒绝了请求",
          icon: "error",
          duration: 2000,
        });
        return;
      },
    });
  },
  showQrcode() {
    wx.previewImage({
      urls: [
        "https://p.ananas.chaoxing.com/star3/origin/147cde54c811fd1e83701947fa847080.png",
      ],
      current:
        "https://p.ananas.chaoxing.com/star3/origin/147cde54c811fd1e83701947fa847080.png", // 当前显示图片的http链接
    });
  },
  onLoad() {},
  aboutMe() {
    wx.navigateTo({
      url: "/pages/subpages/aboutus/aboutus",
    });
  },

  clearCache() {
    this.setData({ userInfo: {} });
    wx.removeStorageSync("userInfo");
    wx.showToast({
      title: "清除成功",
      icon: "none",
      duration: 2000,
    });
  },

  // 帮助
  help() {
    wx.navigateTo({
      url: "/pages/subpages/help/help",
    });
  },
  sponsor() {
    wx.navigateTo({
      url: "/pages/subpages/sponsor/sponsor",
    });
  },
  getUserId() {
    let uid = wx.getStorageSync("uid");
    return uid;
  },
  onShow() {
    let userInfo = wx.getStorageSync("userInfo");
    console.log(userInfo);
    this.setData({ userInfo: userInfo });
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1,
      });
    }
  },
});
