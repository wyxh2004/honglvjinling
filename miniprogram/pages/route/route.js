Page({
    onShareTimeline: function () {
        return {
            title: '分享到朋友圈标题',
        };
    },
    onShareAppMessage: function () {
        return {
            title: '分享标题',
            path: '/pages/index/index', // 分享的路径
        };
    },
    data: {
        hello: "hi",
    },
    change: function () {
        this.setData({
            hello: this.data.hello + " world"
        })
    }
});