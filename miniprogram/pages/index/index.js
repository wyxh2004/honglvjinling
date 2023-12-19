Page({
    onReady: function () {
        this.getLocation();
    },

    // 处理输入事件
    onInput: function (e) {
        this.setData({
            searchKeyword: e.detail.value
        });
    },
    data: {
        latitude: 32.0595,
        longitude: 118.5904,
        scale: 15,
        markers: [],      // 地图标记点
        searchKeyword: '',  // 用户输入的地名
    },
    // 获取用户当前位置
    getLocation: function () {
        wx.getLocation({
            type: 'wgs84',
            success: (res) => {
                const latitude = res.latitude;
                const longitude = res.longitude;

                this.setData({
                    latitude,
                    longitude,
                    markers: [{  // 在地图上标记用户当前位置
                        id: 1,
                        latitude,
                        longitude,
                        title: '我的位置',
                        iconPath: '/images/position.png',  // 自定义标记图标路径
                        width: 40,
                        height: 40,
                    }],
                });
            },
            fail: (err) => {
                console.error('获取地理位置失败：', err);
            }
        });
    },
    // 跳转到搜索页面
    goToSearch: function () {
        wx.navigateTo({
            url: '/pages/search/search',
        });
    },
});