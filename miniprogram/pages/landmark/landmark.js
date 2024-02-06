Page({
    data: {
        landmarkList:
            [
                {
                    name: '侵华日军南京大屠杀纪念馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '南京抗日航空烈士纪念馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '中山陵',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '雨花台烈士陵园',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '渡江胜利纪念馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '南京民间抗日战争博物馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '桂子山烈士陵园',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '大金山国防园',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '云台山抗日烈士陵园',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '中华民国革命史博物馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
                  {
                    name: '南京工运纪念馆',
                    imgUrl: 'https://bbs.scumaker.org/uploads/default/original/1X/ddb7c3bbf822a8aea931470a41797d1ecd0e6ac1.png'
                  },
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