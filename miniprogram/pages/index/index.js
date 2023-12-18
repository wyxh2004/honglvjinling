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

    // 处理搜索按钮点击事件
    searchLocation: function () {
        const keyword = this.data.searchKeyword;

        // 检查用户是否输入了地名
        if (keyword.trim() === '') {
            wx.showToast({
                title: '请输入地名',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        // 跳转到地名页面，并将地名作为参数传递
        wx.navigateTo({
            url: '/pages/location/location?keyword=' + encodeURIComponent(keyword),
        });
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
                        iconPath: '/images/local.png',  // 自定义标记图标路径
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
    data: {
        latitude: 32.0595,     
        longitude: 118.5904,    
        scale: 15, 
        markers: [],      // 地图标记点
        searchKeyword: '',  // 用户输入的地名
    },

    // 处理地图拖动事件
    regionchange: function (e) {
        if (e.type === 'end') {
            // 在地图拖动结束后，可以执行一些操作
            console.log('地图拖动结束');
        }
    }
});

