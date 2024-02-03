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
    onLoad: function () {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });
    },
    data: {
        routeList: [
            '雨花台烈士陵园',
            '南京大屠杀纪念馆',
        ]
    }
});