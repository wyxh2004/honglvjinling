Page({
    onShareAppMessage: function () {
        return {
            title: '分享标题',
            path: '/pages/index/index', // 分享的路径
            image: '../../images/logo.png', // 分享的图片
        };
    },
    // 处理输入事件
    onInput: function (e) {
        this.setData({
            searchKeyword: e.detail.value
        });
    },
    search: function (e) {
        const { value } = e.detail;

        // 调用云函数记录搜索记录
        wx.cloud.getHistory({
            name: 'recordSearch',
            data: {
                keyword: value,
            },
            success: (res) => {
                console.log(res.result);
            },
            fail: (err) => {
                console.error(err);
            },
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
    data: {
        searchHistory: ['小程序', '开发', '教程'], // 搜索历史数据
        guessWhatToSearch: ['文学客厅', '红楼梦', '玄武湖', '栖霞山', '六朝', '设计廊', '王安石', '秦淮', '民国建筑', '城墙', '美术馆', '李白', '儒林外史', '乌衣巷', '鸡鸣寺', '朱元璋', '雨花台', '谢灵运', '金陵', '文心雕龙', '颜真卿', '南京博物院', '夫子庙', '钟山风景名胜区'], // 猜你想搜数据
    },
})
