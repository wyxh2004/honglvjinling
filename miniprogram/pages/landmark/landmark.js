Page({
    data: {
        landmarkList:
            [
                'wqwewqeqwe',
                'asdasadadas',
                'qweqweqweqwe',
                'zxczxczxczxc',
                'qweqweqweqwe',
                'zxczxczxczxc',
                'qweqweqweqwe',
                'zxczxczxczxc',
                'qweqweqweqwe',
            ]

    },
    goToSearch: function () {
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    // onLoad: function (options) {
    //     var { landmark } = options;
    //     var landmark_item = this.data.data.filter(item => item.name === landmark)[0];
    //     this.setData({
    //         ...this.data,
    //         data: landmark_item
    //     })
    //     console.log(this.data.data)
    // },
})