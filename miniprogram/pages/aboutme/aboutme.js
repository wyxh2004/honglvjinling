Page({
    data: {
        // userInfo: null,
        // hasUserInfo: false,
        // canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    // 事件处理函数
    handleBindTap: function () {
        wx.navigateTo({
            url: '/pages/register/register'
        })
    },
    register: function () {
        wx.navigateTo({
        })
    },
    //打赏
    showQrcode() {
        wx.previewImage({
            urls: ['https://p.ananas.chaoxing.com/star3/origin/147cde54c811fd1e83701947fa847080.png'],
            current: 'https://p.ananas.chaoxing.com/star3/origin/147cde54c811fd1e83701947fa847080.png', // 当前显示图片的http链接
        })
    },
    //分享小程序
    onShareAppMessage: function () {
        return {
            title: 'landmarkmap小程序',
            path: '/pages/index/index',
            imageUrl: '/images/position.png',
            success: function (e) {
                wx.showToast({
                    title: "分享成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function (e) {
                wx.showToast({
                    title: "分享失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        }
    },
});

// const util = require('../../utils/util.js');
// var app = getApp();
// Page({
//     data: {
//         dailyFreeParseNum: '--',
//         totalParseNum: '--',
//         userInfo: null,
//         hasUserInfo: false,
//     },
//     register: function () {
//         wx.redirectTo({
//             url: 'pages/register/register',
//         })
//     },
//     /**
//      * 组件的方法列表
//      */

//     onLoad: function () { },
//     onShow: function () {
//         if (!app.checkIsLogin()) {
//             this.setData({
//                 hasUserInfo: false,
//             })
//         }
//         if (app.globalData.hasUserInfo) {
//             this.setData({
//                 userInfo: app.globalData.userInfo,
//                 hasUserInfo: app.globalData.hasUserInfo,
//             })
//         }
//         // 获取每日剩余免费解析次数
//         this.getDailyFreeParseNum(),
//             // 获取当前用户总解析次数
//             this.getTotalParseNum();
//     },

//     /**
//      * 授权登录
//      */
//     getUserInfo(e) {
//         if (e.detail.errMsg !== 'getUserInfo:ok') {
//             wx.showToast({
//                 title: '未授权，登录失败',
//                 icon: 'none'
//             })
//             return false;
//         }
//         wx.showLoading({
//             title: "正在登录",
//             mask: true
//         });
//         // 执行登录
//         app.getUserInfo(res => {
//             this.setData({
//                 userInfo: app.globalData.userInfo,
//                 hasUserInfo: app.globalData.hasUserInfo,
//             })
//             wx.hideLoading();
//         })
//     },
//     /**
//      * 获取当日免费次数
//      * 使用本地存储，不走服务端
//      */
//     getDailyFreeParseNum() {
//         var num;
//         var today = util.formatDate(new Date(), '');
//         var lastParseDate = wx.getStorageSync('lastParseDate');
//         if (lastParseDate != today) {
//             wx.setStorageSync('lastParseDate', today);
//             wx.setStorageSync('dailyFreeParseNum', app.globalData.defaultDailyFreeParseNum);
//             num = app.globalData.defaultDailyFreeParseNum;
//         } else {
//             num = wx.getStorageSync('dailyFreeParseNum');
//         }
//         this.setData({
//             dailyFreeParseNum: num
//         })
//     },

//     /**
//      * 获取总解析次数
//      */
//     getTotalParseNum() {
//         app.apiRequest({
//             url: '/records/total',
//             success: res => {
//                 this.setData({
//                     totalParseNum: res.data.total_num
//                 })
//             }
//         })
//     },


// })