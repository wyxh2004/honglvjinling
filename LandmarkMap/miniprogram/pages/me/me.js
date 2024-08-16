const defaultAvatarUrl =
  "https://p.ananas.chaoxing.com/star3/origin/376a660d02da5cfd662d800c5e6899c6.png";
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,

    vibison: false,
    iosDialog2: false,
    avatarUrl: defaultAvatarUrl,
    appId: "wx58aee48851bfd95d",
    topTips: false,
    tophide: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
  },

  onShow() {
    wx.setNavigationBarTitle({
      title: "我的",
    });
    wx.setNavigationBarColor({
      backgroundColor: "#ffffff",
      frontColor: "#000000",
    });
    this.setData({
      workTime: wx.getStorageSync("workTime"),
      restTime: wx.getStorageSync("restTime"),
      vibison: wx.getStorageSync("vibison"),
    });
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "完善信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },

  close() {
    this.setData({
      iosDialog2: false,
    });
  },
  openIOS2() {
    this.setData({
      iosDialog2: true,
    });
  },
});
