Page({
    onShareAppMessage: function () {
        return {
            title: '分享给好友',
            path: '/pages/index/index', // 分享的路径
            image: '../../images/logo.png', // 分享的图片
        };
    },
    onReady: function () {
        this.getLocation();
    },
    data: {
        latitude: '',
        longitude: '',
        scale: 18,
        markers: [],      // 地图标记点
        searchKeyword: '',  // 用户输入的地名
    },
    getLocation: function () {
        wx.getLocation({
            type: 'wgs84',
            success: res => {
                console.log('定位成功', res)
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers: [{
                        id: 1,
                        latitude: res.latitude,
                        longitude: res.longitude,
                        iconPath: '/images/position.png',
                        width: 40,
                        height: 40,
                    }]
                })
            },
            fail: err => {
                console.error('定位失败', err)
            }
        })
    },
    goToSearch: function () {
        wx.navigateTo({
            url: '/pages/search/search',
        });
    },
    goToFontpage: function () {
        wx.navigateTo({
            url: '/pages/index/index',
        });
    },
    goToTourline: function () {
        wx.navigateTo({
            url: '/pages/tourline/index',
        });
    },
    goToExplore: function () {
        wx.navigateTo({
            url: '/pages/explore/index',
        });
    },
    goToLiterature: function () {
        wx.navigateTo({
            url: '/pages/literature/index',
        });
    },
});