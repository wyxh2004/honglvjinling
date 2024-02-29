// register.js
Page({
  data: {
    genderOptions: ["男", "女"],
    genders: { 0: "男", 1: "女" },
    region: ["江苏省", "南京市", "浦口+区"],
    regionLabel: "江苏省南京市浦口区",
  },
  onGenderChange: function (e) {
    this.setData({
      gender: e.detail.value,
    });
  },
  onRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      regionLabel: this.formatRegionLabel(e.detail.value),
    });
  },
  formatRegionLabel: function (region) {
    return region.join(" ");
  },
  onSubmit: function () {
    const username = this.data.username;
    const gender = this.data.gender;
    const age = this.data.age;
    const region = this.data.regionLabel;
    // 在这里处理注册逻辑，例如发送数据到服务器
    wx.cloud.callFunction({
      name: "register",
      data: {
        username: username,
        gender: gender,
        age: age,
        region: region,
      },
    });
    wx.showToast({
      title: "注册成功",
      icon: "success",
      duration: 2000,
    });
  },
  onReset: function () {
    // 重置表单数据
    this.setData({
      username: "",
      gender: "0", // 假设 '0' 对应 '男'
      age: "",
      region: ["江苏省", "南京市", "浦口区"],
      regionLabel: "江苏省南京市浦口区",
    });
  },
});
