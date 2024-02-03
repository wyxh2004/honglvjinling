// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, // 是否显示指示点
    autoplay: true, // 是否自动切换
    interval: 2000, // 自动切换时间间隔
    duration: 500, // 切换动画时长
    data: [
      {
        name: '雨花台烈士陵园',
        tickets: '门票免费，但需要预约',
        introduction: '雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。',
        opening_hours: '【 开放时间 】景区开放时间为 8:00至17:00 （17:00停止入园）,（2）公交：北门：D58，39，126坐至中华门地铁站，后步行约1公里',
        route_plan: '（1）地铁：中华门站，后步行约一公里，推荐从北大门进入',
        imgs: [
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
          'https://wm.jschina.com.cn/zt2023/2023/qingming/ydjs/gjjlsly/202203/W020220323416247846603.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%E9%9B%A8%E8%8A%B1%E5%8F%B0%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD.jpg/1200px-%E9%9B%A8%E8%8A%B1%E5%8F%B0%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD.jpg',
        ]
      },
      {
        name: '南京大屠杀纪念馆',
        tickets: '门票价格会根据季节和具体的区域有所不同，通常有不同的套票选择',
        introduction: '南京大屠杀纪念馆位于南京市雨花台区中华门大街100号，是南京大屠杀的纪念地，也是全国重点文物保护单位。南京大屠杀是1937年9月14日南京大屠杀发生后，中国军民为纪念这一历史事件而建立的纪念性纪念馆。纪念馆以“国家公祭”为主题，以“国家公祭日”为年节。',
        opening_hours: '【 开放时间 】周一至周日 9:00-16:00',
        route_plan: '（1）地铁：中华门站，后步行约一公里，推荐从北大门进入 1231231223123',
        imgs: [
          'https://zh.wikipedia.org/zh-cn/File:%E5%8D%9A%E5%AE%A2%E5%9B%BE%E7%89%87%E6%9C%AA%E5%91%BD%E5%90%8D%E7%89%87.jpg',
          'https://www.rednanjing.cn/redsource/Redsource/article/id/93.html',
        ]
      },
      {
        name: '中山陵',
        tickets: '门票10元',
        introduction: '中山陵是孙中山先生的陵墓，坐落在紫金山的灵谷寺内。整个陵园分为前、中、后三部分，包括陵墓区、纪念建筑区和游览区。陵墓气势宏伟，纪念建筑区有着丰富的历史文化展览，游览区则可以欣赏到紫金山的美丽风光。',
        opening_hours: ' 通常早上8:00至下午5:00，但具体时间可能会根据季节而变化',
        route_plan: '中山陵位于南京玄武区紫金山上，可搭乘公共交通工具或乘车前往',
        imgs: [
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
        ]
      },
      {
        name: '总统府',
        tickets: '门票免费，但需要预约',
        introduction: '南京总统府位于南京市玄武区玄武门大街1号，是南京政府的正式代表机构。1939年8月1日，孙中山先生在南京就职，南京政府成立，南京总统府正式成立。',
        opening_hours: '【 开放时间 】周一至周日 9:00-16:00',
        route_plan: '（1）地铁：中华门站，后步行约一公里，推荐从北大门进入',
        imgs: [
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
          'https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg',
        ]

      }
    ]
  },

  onLoad(options) {
    // console.log(options)
    var { card } = options;
    var card_item = this.data.data.filter(item => item.name === card)[0];
    this.setData({
      ...this.data,
      data: card_item
    })
    console.log(this.data.data)
    console.log(this.data)
  },
})