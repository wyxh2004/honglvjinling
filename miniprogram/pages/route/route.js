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
            {
                name: '雨花台烈士陵园',
                imgUrl: 'https://example.com/yuhuatai.jpg',
              },
              {
                name: '南京大屠杀纪念馆',
                imgUrl: 'https://example.com/nanjing.jpg',
              },
              {
                name: '中山陵',
                imgUrl: 'https://example.com/zhuangshi.jpg',
              },
              {
                name: '总统府',
                imgUrl: 'https://example.com/gongwu.jpg',
              },
        ]
    }
});