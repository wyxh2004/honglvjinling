// app.js
App({
  onload: function (option) {
    console.log('App onload');
    wx.loadFontFace({
      family: 'CustomFontFamily', // 自定义字体家族名称
      source: 'url(./Founder and quasi-circle simplified.TTF)', // 字体文件的路径，可以是本地文件路径或网络URL
      success: res => {
        console.log('字体加载成功',res)
      },
      fail: err => {
        console.error('字体加载失败', err)
      }
    })
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    this.globalData = {};
  }
});
