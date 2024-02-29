Page({
    data: {
        avatarUrl: '' // 初始化头像路径为空
    },

    // 选择图片的事件处理函数
    chooseImage: function () {
        // 调用微信小程序的选择图片接口
        wx.chooseImage({
            count: 1, // 选择图片的数量，这里设为 1
            sizeType: ['compressed'], // 压缩选中的图片
            sourceType: ['album', 'camera'], // 选择图片的来源，可以是相册或相机

            success: (res) => {
                // res.tempFilePaths 是一个数组，存放选中的图片路径
                const tempFilePath = res.tempFilePaths[0];

                // 更新数据，将选中的图片路径赋值给 avatarUrl
                this.setData({
                    avatarUrl: tempFilePath
                });
            }
        });
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