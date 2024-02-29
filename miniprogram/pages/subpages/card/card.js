// pages/card/card.js
Page({
  data: {
    indicatorDots: true, // 是否显示指示点
    autoplay: true, // 是否自动切换
    interval: 2000, // 自动切换时间间隔
    duration: 500, // 切换动画时长
    show: false,
    data: [
      {
        name: "雨花台烈士陵园",
        tickets: "门票免费，但需要预约",
        introduction:
          "雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。",
        opening_hours:
          "【 开放时间 】景区开放时间为 8:00至17:00 （17:00停止入园）,（2）公交：北门：D58，39，126坐至中华门地铁站，后步行约1公里",
        route_plan: "（1）地铁：中华门站，后步行约一公里，推荐从北大门进入",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://wm.jschina.com.cn/zt2023/2023/qingming/ydjs/gjjlsly/202203/W020220323416247846603.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%E9%9B%A8%E8%8A%B1%E5%8F%B0%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD.jpg/1200px-%E9%9B%A8%E8%8A%B1%E5%8F%B0%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD.jpg",
        ],
      },
      {
        name: "南京大屠杀纪念馆",
        tickets: "门票价格会根据季节和具体的区域有所不同，通常有不同的套票选择",
        introduction:
          "南京大屠杀纪念馆位于南京市雨花台区中华门大街100号，是南京大屠杀的纪念地，也是全国重点文物保护单位。南京大屠杀是1937年9月14日南京大屠杀发生后，中国军民为纪念这一历史事件而建立的纪念性纪念馆。纪念馆以“国家公祭”为主题，以“国家公祭日”为年节。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。",
        opening_hours: "【 开放时间 】周一至周日 9:00-16:00",
        route_plan:
          "（1）地铁：中华门站，后步行约一公里，推荐从北大门进入 1231231223123",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
        ],
      },
      {
        name: "中山陵",
        tickets: "门票10元",
        introduction:
          "中山陵是孙中山先生的陵墓，坐落在紫金山的灵谷寺内。整个陵园分为前、中、后三部分，包括陵墓区、纪念建筑区和游览区。陵墓气势宏伟，纪念建筑区有着丰富的历史文化展览，游览区则可以欣赏到紫金山的美丽风光。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。",
        opening_hours:
          " 通常早上8:00至下午5:00，但具体时间可能会根据季节而变化",
        route_plan:
          "中山陵位于南京玄武区紫金山上，可搭乘公共交通工具或乘车前往",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
        ],
      },
      {
        name: "总统府",
        tickets: "门票免费，但需要预约",
        introduction:
          "南京总统府位于南京市玄武区玄武门大街1号，是南京政府的正式代表机构。1939年8月1日，孙中山先生在南京就职，南京政府成立，南京总统府正式成立。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。雨花台风景名胜区位于南京市雨花台区北部中华门外，占地面积153.7万平方米。雨花台风景名胜区是中国新民主主义革命的纪念圣地，是新中国规模最大的纪念性陵园，是全国重点文物保护单位、全国爱国主义教育示范基地、国家首批AAAA级旅游区和百家红色旅游经典景区，是一个集教育、旅游、休闲、娱乐为一体的江苏省级纪念性风景名胜区。",
        opening_hours: "【 开放时间 】周一至周日 9:00-16:00",
        route_plan: "（1）地铁：中华门站，后步行约一公里，推荐从北大门进入",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
          "https://www.rednanjing.cn/upload/adminredsource/20191016/8108eff071cf5f907404c18c8a529b41.jpg",
        ],
      },
      {
        name: "南京抗日航空烈士纪念馆",
        tickets: "免费进入，红色研学套餐需要另外购买",
        introduction:
          "南京抗日航空烈士纪念馆位于南京市玄武区紫金山北麓，是世界上首座国际抗日航空烈士纪念馆，首批国家级抗战纪念设施、遗址名录，展示了第二次世界大战期间，中、美、苏等国空军在中华大地上联合抗击侵华日军的英勇历史。",
        opening_hours: "周二至周日 09:00-16:30,16:30停止入场，周一固定闭关。",
        route_plan:
          "313路，300路到抗日航空纪念馆公交站；地铁4号线地铁到王家湾站，步行700m",
        imgs: [
          "https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/d04e698a692248a680adb5f57229a1b7~tplv-xv4ileqgde-resize-w:750.image",
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nanjing_Monument_to_the_Aviator_Martyrs_2.jpg",
          "https://dky.njau.edu.cn/__local/7/1A/DA/1325C623066A8D2F12F66038118_8BD7C4B3_C241E.png",
        ],
      },
      {
        name: "南京民间抗日战争博物馆",
        tickets: "免费进入",
        introduction:
          "南京民间抗日战争博物馆落于南京市雨花台区安德门大街48号，是江苏省第一座反映中国人民抗日斗争的民间专题博物馆。博物馆建于2006年，博物馆拥有两座展厅，分别为“南京保卫战”主题馆和“抗战文献”史料馆，博物馆共有藏品5900余件，图书4万余册，其中关于抗战历史的孤本善本就有2200多本，收集抗战亲历者手印2300多份。",
        opening_hours:
          "周二至周日 09:00-16:00,16:00停止入场，周一固定闭关。建议时长约为1小时。",
        route_plan:
          "113路，75路，44路到达宁双路站步行136米到达；地铁1号线到天隆寺站（3口）步行799米到达。",
        imgs: [
          "https://p3.ifengimg.com/a/2018_20/b62f91cf29ca710_size310_w600_h398.png",
          "https://lh3.googleusercontent.com/proxy/0WtXTfphKI0kqas6t8pkbkqqAnwOlTB5KOej1rIf8jF1ypchn3ckhGFMNesTxCWm7aKN_m4ih_JEIlEUI9U_Sm6g5iZtgPLCAf5lIUeSoHw1sn7jQrl6N9C8",
          "https://lh3.googleusercontent.com/proxy/RH-_JsdkCwQKr-DftddLqv9MB0-cm0IxoU_skxd5vXDFWrbQr8DKjbQGNfvIK5lt6zrqHJe6GYOi09jCFDvO0MKjyuAbRVY03c-yFE4AmG25IZOIOJlUxto",
        ],
      },
      {
        name: "云台山抗日烈士陵园",
        tickets: "暂无",
        introduction:
          "云台山烈士陵园位于江宁区横溪街道云台山东南脚下的官塘山坡，占地面积10000多平方米，是江宁区最大的爱国主义教育基地。陵园内埋葬着87位(南京重要近现代建筑铭牌上写65位)牺牲的新四军抗日烈士。",
        opening_hours: "暂无",
        route_plan: "962路，989路到云台山烈士墓公交站。",
        imgs: [
          "https://mzt.jiangsu.gov.cn/picture/0/s_5536cb0133594837b83a7207f77ff0d3.jpg",
          "https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/fd3c0f3394374c6387c1e39cb7440b0a~tplv-xv4ileqgde-resize-w:750.image",
        ],
      },
      {
        name: "中国代表团，梅园新村",
        tickets: "免费进入",
        introduction:
          "纪念馆是一片开放式的街道，它南至汉府街，北至代表团办事处原址外延35米，东至梅园新村17号东侧围墙，西至南京军区空军后勤部围墙。这里有一幢幢20世纪上半叶的建筑、一排排法国梧桐。梅园新村由南至北依次有国共南京谈判史料陈列馆、铜像、图书馆、代表团办	事处旧址（梅园新村30号、梅园新村35号、梅园新村17号）等景点。",
        opening_hours: "周二-周日 09:00-17:30开放;全年 周一 全天不开放",
        route_plan:
          "地铁2号线到西安门浦发银行站步行460米；地铁2，3号线到大行宫站步行662米；25路，29路，34路，5路，65路到中山东路逸仙桥公交站。",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20190917/9604b95f391cb67f7257088e076fa2c5.jpg",
          "http://myxc.njmuseumadmin.com/uploadfile/2021/1013/20211013024917109.jpg",
          "http://myxc.njmuseumadmin.com/uploadfile/2020/0812/20200812102635878.jpg",
        ],
      },
      {
        name: "渡江胜利纪念馆",
        tickets: "免费进入，人工讲解另外收费。",
        introduction:
          "渡江胜利纪念馆坐落在六朝古都南京挹江门城楼上，'钟山风雨起苍黄，百万雄师过大江'，1949年4月23日解放南京时，中国人民解放军就是从这里浩浩荡荡入城的。1984年4月23日，为纪念南京解放35周年，经过重新整修后，在此城楼建立了渡江胜利纪念馆。馆内珍藏着丰富的文物和史料，展示了中华民族的历史选择，记载了中国革命史的发展历程，阐述了中国共产党和中国人民为寻求真理进行艰苦卓绝的斗争业绩。由主馆区、挹江门城楼馆区（老馆）和渡江胜利纪念碑组成。主馆区位于位于长江与秦淮河交汇的三汊河口公园。纪念馆展出大厅有各种文物、资料近千件。全馆共4个展厅。",
        opening_hours:
          "周二-周日 09:00-16:30开放;全年 周一 全天不开放;元旦节,春节,清明节,劳动节,端午节,中秋节,国庆节 09:00-16:30开放",
        route_plan: "104路，133路，91路到郑和南路公交站。 ",
        imgs: [
          "https://www.rednanjing.cn/upload/adminredsource/20190923/a1b45fb29ca01af50035a794a58866e0.jpg",
          "https://p1.ifengimg.com/a/2018_33/a7a7a68582824a6_size240_w456_h281.png",
        ],
      },

      {
        name: "颐和路社区将军馆",
        tickets: "暂无",
        introduction:
          "颐和路社区将军馆里有一座将军群雕，还有很多将军的照片，人们在这里可以了解红军长征、抗美援朝的历史。",
        opening_hours: "全年 09:00-17:00开放",
        route_plan:
          "地铁4号线到云南路，步行497m；3路，42路，78路，B15路到莫干路公交站，步行83m。",
        imgs: [
          "https://lh3.googleusercontent.com/proxy/uEPoB4kGkRLvIyTBqcgC7gPPEQ_auUxxZm69VaVwY-z89ufKSG58U_V0toSGyADK3OMOQ2WxrO1KclKIbImT2cmygUtkLL2K4L8ZYudcZHdHddqBtD2ioIgn_Ak",
          "https://lh3.googleusercontent.com/proxy/EE7EPN9bmULDBKF4oH3ISUUHYF5e31ADMk7a8KKkP0zqN58ITZ16FDmtumEOU812QZV7iEPMRWO59qryfQ5IVSPYvqOk4Xk1Rk6gqwmFEQxRw_DASgyoXRz3nvU",
        ],
      },

      {
        name: "江北新区红色广场",
        tickets: "免费开放",
        introduction:
          "江北新区红色广场配套建设了江北新区红色文化展陈馆，从空中俯瞰建筑呈品字形，呼应曾在这里战斗过的王菏波同志“品重柱石”的高尚品格。场馆内包括“两浦星火革命洪流”“疾风劲草北岸屹立”“救亡烽火坚持抗战”等单元内容，展示了江北地区在中国共产党历史、中国革命史和中国工人运动史中重要的地位和贡献。",
        opening_hours:
          "每周二至周日9:00-17:00对外开放，每周一闭馆检修（国家法定节假日和特殊情况除外）",
        route_plan:
          "公交559路、560路、635路 至丁圩总站，步行约570米即可到达；乘坐地铁4号线至龙江站，4号口出，步行约200米至龙江地铁站西公交站，换乘公交560路（往丁圩总站方向）至丁圩总站下车，步行约570米即可到达。",
        imgs: [
          "https://dimg04.c-ctrip.com/images/1me7112000cnyixfbFF45_R_800_10000_Q90.jpg?proc=source/tripcommunity",
          "https://dimg04.c-ctrip.com/images/1me6y12000cnyepiyB96B_R_800_10000_Q90.jpg?proc=source/tripcommunity",
          "https://dimg04.c-ctrip.com/images/1me4p12000cnym4f9412A_R_800_10000_Q90.jpg?proc=source/tripcommunity",
        ],
      },

      {
        name: "浦口火车站",
        tickets: "暂无",
        introduction:
          "浦口火车站旧址＂位于南京市浦口区津浦路，是南北交通要道津浦铁路终端。津浦铁路（天津～南京浦口）全线于清光绪三十四年（1908年）开工建设，于1912年（民国元年）全线通车，1914年＂浦口火车站＂和其附属建筑竣工交付使用。1929年5月28日，孙中山先生灵柩由北平抵此，国民政府举行了隆重的迎灵仪式，然后通过浦口码头过冮，安葬于中山陵。1968年随着南京长江大桥通车，浦口火车站停办客运，1985恢复部分客运，并更名为＂南京北站＂，2004年停办客运。车站遗存文物主要有主体大楼、中山停灵台、贵宾楼、电报房等。",
        opening_hours: "全年 全天开放，具体营业状态以当天开放情况为准。",
        route_plan: "G49路，G48路，宁浦线渡船到浦口码头公交站，步行113m。",
        imgs: [
          "https://p1.ifengimg.com/a/2017_08/5e9cc1f315803a3_size305_w1600_h1066.jpg",
          "https://www.chinakongzi.org/zx/201702/W020170223460849520494.jpg",
          "https://p6-pc-sign.douyinpic.com/image-cut-tos-priv/f80abac8ab129975bc436d41d031a848~tplv-dy-resize-origshort-autoq-75:330.jpeg?x-expires=2012486400&x-signature=Dmo5fw1D7hhAjCrl5Jb4zknOMwc%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=cover&biz_tag=pcweb_cover&l=20231013003632F8C7BBCAF587383FEE9D",
        ],
      },

      {
        name: "桂子山烈士陵",
        tickets: "免费开放，具体收费情况以现场公示为主",
        introduction:
          "墓地安葬着抗日战争时期我新四军二师五旅十三团在桂子山战斗中英勇牺牲的革命烈士。墓区总面积1.8万平方米，四周用砖石砌成围墙，墓区内用花岗砌成一座高10米的烈士塔。",
        opening_hours: "08:30-17:00（16:30停止检票入园）",
        route_plan: "104路，133路，91路到郑和南路公交站。 ",
        imgs: [
          "https://dimg04.c-ctrip.com/images/0102e120008h3y4cnCF1A.jpg",
          "https://p3.itc.cn/q_70/images03/20220930/503d41739f3745429a5254093d88f167.jpeg",
          "https://wm.jschina.com.cn/zt2022/2022/qingming/ydjs/nj/202203/W020220324328578719971.jpg",
        ],
      },

      {
        name: "侵华日军南京大屠杀草鞋峡遇难同胞纪念碑",
        tickets: "暂无",
        introduction:
          "一九三七年十二月十三日，侵华日军攻占南京后，逃聚在下关沿江待渡之大批难民和已解除武装之士兵五万七千余人（远东军事法庭认证，当年在草鞋峡被屠杀的人有五万七千四百一十八人），遭日军捕获后，悉被集中囚禁于幕府山下之四、五所村。因连日惨遭凌辱，冻饿致死一批，继于18日依悉被捆绑，押解至草鞋峡，用机枪集体射杀，少数伤而未死者后用刺刀戳毙，后又纵火焚尸，残骸悉弃江中……（草鞋峡遇难同胞纪念碑铭文）在此被日军屠杀的5万余同胞，最后被敛尸入葬的只有3000来人。后人在此立侵华日军南京大屠杀—草鞋峡遇难同胞纪念碑，做纪念。",
        opening_hours: "暂无",
        route_plan:
          "乘南京公交1路至上元门或乘坐南京地铁3号线至上元门站东行300米。",
        imgs: [
          "https://y2.ifengimg.com/a/2014_48/84b77acbe8cc845.jpg",
          "https://photocdn.sohu.com/20121203/Img359277882.jpg",
        ],
      },

      {
        name: "南京工运纪念馆",
        tickets: "具体收费情况以现场公示为主",
        introduction:
          "南京工运纪念馆即两浦铁路工人“二七”大罢工指挥所旧址。中国早期工人运动领导人王荷波在浦镇机厂工人中成立了中华工会。1923年，王荷波在此召开紧急会议，决定声援京汉铁路大罢工，指挥所设于此。2011年5月，指挥所旧址被改造为南京工运纪念馆。",
        opening_hours: "周一至周五 9:00-11:30、14:30-16:30",
        route_plan:
          "664路，666路到点将台公交站，步行515m；583路到点将台公交站，步行586m。",
        imgs: [
          "https://jsnews.jschina.com.cn/2021/xjzgwxxd/dd_xjzg/njgy/202112/W020211231484763076511.jpg",
          "https://ai.njau.edu.cn/__local/D/CC/DD/904F6DDA6A2119737652C9F45B7_EAD32BB6_51C8FC.jpg",
          "https://sociology.nju.edu.cn/_upload/article/images/8e/0a/f087aee343989634c2ca9a1a8586/40c7316e-fa1d-4c1e-9a02-f1a997125ec9.jpg",
        ],
      },

      {
        name: "八路军驻京办事处纪念馆",
        tickets: "具体详情请咨询景区",
        introduction:
          "八路军驻京办事处旧址纪念馆，现为梅园新村纪念馆的分馆。建筑除主楼外，楼对门处设有传达室一间，楼后设有一排平房（当时西北侧小披间为油印室，北侧为厨房和食堂）。主楼上下各有住房三间（朝南两间，朝北一间，朝北的房间被不完全分隔为两部分）、卫生间及楼梯间各一间。当时楼下朝北房间为办公室及会客室（此处亦为入口处），朝南东间为李克农办公室兼卧室，西间为临时接待室（后叶剑英移住楼下此间），楼上朝北房间为博古的办公室及会客室，朝南东间为叶剑英办公室兼卧室，西间则为随从人员卧室。",
        opening_hours: "开放时间：09:00-17:00(全天)；停止入场时间:16:30",
        route_plan:
          "乘1号线至玄武门站，步行600m；乘56路至云南北路站，步行550m。",
        imgs: [
          " https://img03.sogoucdn.com/v2/thumb/retype_exclude_gif/ext/auto/crop/xy/ai/w/500/h/333?appid=200698&url=https://pic.baike.soso.com/ugc/baikepic2/0/20160731004902-1522829910.jpg/0",
          "https://mzt.jiangsu.gov.cn/picture/0/e02d9543fb5d4b2f859393a89b45bbcc.png",
          "https://p3-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/dd6d95bbea1441c9a0025cad64835d17~tplv-mlhdmxsy5m-q75:0:0.image",
        ],
      },

      {
        name: "晓庄革命烈士纪念碑",
        tickets: "暂无",
        introduction:
          "1951 年3 月15 日,南京晓庄师范24 周年校庆时,全校师生员工为纪念晓庄英烈,在陶行知墓地附近建了一座晓庄英烈纪念碑,1997年学校又予以重建,并由原国务委员、中顾委常委、晓庄老校友张劲夫题写碑文“晓庄革命烈士永垂不朽”,纪念碑底座写有十位英烈的姓名和生卒年月。晓庄革命烈士纪念碑于1983 年被江苏省人民政府列为江苏省文物保护单位,中共江苏省委公布为江苏省爱国主义教育基地",
        opening_hours: "暂无",
        route_plan:
          "地铁1号线，地铁7号线到晓庄站，步行966m；24路，到金科院幕府校区。",
        imgs: [
          " https://lh3.googleusercontent.com/proxy/xoQvPmldvk1fKJMsghfow1XUGO4v8rpGXGvzJtpscn8l_tSg2gJ5QzsVH91dMgN6Vj6RfTirOAUcrwpmCpFq_dTmd47mfJFd3rhj",
        ],
      },

      {
        name: "皖南事变三烈士墓",
        tickets: "暂无",
        introduction:
          "皖南事变三烈士墓是在皖南事变中遇难的新四军副军长项英、副参谋长周子昆和政治部主任袁国平的墓园，位于江苏省南京市雨花台区望江矶，在雨花台烈士陵园西南约1公里处，建于1955年。",
        opening_hours: "暂无",
        route_plan:
          "地铁10号线，地铁1号线到安德门站，步行947m;44路，61路，86路，98路到花神大道公交站，步行396m。",
        imgs: [
          "https://lh3.googleusercontent.com/proxy/U_Vtd9HOSUBS6gewjI_uuFZm680tDcj7XdfMvwEDd_JJQyIP1rCKYH7RQvUeGKnCOdHueyt43S3j1yJfwXUHqoXggGb8Q17lvSuf8TerBZpZHZY8fRuU1a4fRcXP3Bv2SAAo",
          "https://www.rednanjing.cn/upload/ueditor/20210512/609b667fcc1c9.jpg",
          "https://jsnews.jschina.com.cn/2021/hsxal/xsdk/ah/202106/W020210630858390905875.jpg",
        ],
      },

      {
        name: "浦口革命烈士纪念碑",
        tickets: "暂无",
        introduction:
          "为纪念在战斗中牺牲的指战员们,铭记先烈们的丰功伟绩,1957 年4 月,经报请江苏省人民革命委员会批准,在江浦县凤凰山建立革命烈士纪念碑。1999 年4 月,中共江浦县委、县人民政府决定,易地在该镇求雨山顶重建纪念碑,并于2000 年清明节前落成。碑体形如风帆,又似利剑、火炬,碑身用混凝土浇筑,外挂花岗岩,宽2.4 米,高19.99 米。纪念碑正面刻着“革命烈士永垂不朽”,背面刻着“革命烈士纪念碑”及碑文。碑前广场整洁,四周青松环抱。浦口革命烈士纪念碑于2005 年11 月被中共南京市委党史工作办公室命名为南京党史教育基地;2007 年12 月被中共江苏省委宣传部公布为江苏省爱国主义教育基地。",
        opening_hours: "8:00-17:00",
        route_plan: "604路，G51路，G50路到浦口烈士纪念碑公交站，步行26m。",
        imgs: [
          "https://p1-q.mafengwo.net/s17/M00/DF/7E/CoUBXl_V-mmAdsuuABKpqKgPnwI37.jpeg?imageMogr2%2Fthumbnail%2F%21750x562r%2Fgravity%2FCenter%2Fcrop%2F%21750x562%2Fquality%2F100",
          "https://p1-q.mafengwo.net/s12/M00/C2/03/wKgED1vRbSmAPth-AAEydEITf1o58.jpeg?imageMogr2%2Fthumbnail%2F%21750x562r%2Fgravity%2FCenter%2Fcrop%2F%21750x562%2Fquality%2F100",
          "https://www.rednanjing.cn/upload/adminredsource/20190923/3ce18b9f269859f8b22dbd5f85d8035d.png",
        ],
      },

      {
        name: "竹镇市抗日民主政府旧址",
        tickets: "具体详情请咨询景区",
        introduction:
          "竹镇市抗日民主政府建立后，广泛发动群众，团结各方力量，围绕武装斗争的需要，大力发展民兵抗日武装，带领根据地军民自力更生、发展经济、节约开支、增加财政收入，粉碎了日伪军的经济封锁。1945年8月，随着抗日战争的胜利，竹镇市抗日民主政府完成了历史使命，奉命撤销。1946年7月，新四军被迫进行战略转移，国民党反动派卷土重来，市政府旧址遭到很大破坏。中华人民共和国成立后，竹镇市抗日民主政府旧址进行过多次维修，并被辟为竹镇市抗日民主政府纪念馆。1982 年，南京市人民政府把该旧址列为市级文物保护单位，并于1983年拨款重新修复。纪念馆内展出新四军五支队在竹镇地区活动的图片100多幅，实物（仿制品）200多件。2006年4月，被南京市委宣传部公布为南京市爱国主义教育基地。2019年，被列为江苏省文物保护单位。2021年被命名为江苏省党史教育基地。",
        opening_hours: "暂无",
        route_plan:
          "乘坐到36路到竹镇东公交站步行257米到竹镇市抗日民主政府纪念馆",
        imgs: [
          "https://mzt.jiangsu.gov.cn/picture/0/s_6178f4511b28441f88c3794759d7c89d.jpg",
          "https://p1-q.mafengwo.net/s12/M00/6A/51/wKgED1vKMmOAWIISAAINTc-pSsg16.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL21mdy1mYXN0ZGZzLTEyNTgyOTUzNjUuY29zLmFwLWJlaWppbmcubXlxY2xvdWQuY29tL3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          "https://p1-q.mafengwo.net/s16/M00/60/C7/CoUBUmD5HYuAemSVABvmjt2HIEE020.jpg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL21mdy1mYXN0ZGZzLTEyNTgyOTUzNjUuY29zLmFwLWJlaWppbmcubXlxY2xvdWQuY29tL3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
        ],
      },
    ],
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onLoad(options) {
    // console.log(options)
    var { card } = options;
    var card_item = this.data.data.filter((item) => item.name === card)[0];
    this.setData({
      ...this.data,
      data: card_item,
    });
    console.log(this.data.data);
    console.log(this.data);
  },
});
