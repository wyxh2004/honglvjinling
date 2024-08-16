
<div align="center">

# 红旅金陵-简介
</div>

:sparkles:身处**南京**这样一座遍布红色故事的英雄之城，保护这些建筑，宣传和弘扬这些红色革命建筑更是迫在眉睫，如果说一座石碑见证了一段红色往事，那么保护这些红色革命建筑，就是在延续和不断传承中华文化的红色血脉，而作为大学生的我们，便是传承和保护这些建筑的“**红色使者**” :sparkles:

因此，**红旅金陵**小程序正式问世

----

### 参考文档
- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html) • 微信小程序官方开发文档，这是一切原生小程序的基石
- [Vant Weapp](https://github.com/youzan/vant-weapp) 一个轻量、可靠的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。
> 小程序已经支持使用 npm 安装第三方包，详见 npm 支持

通过 npm 安装
```
npm i @vant/weapp -S --production
```
通过 yarn 安装
```
yarn add @vant/weapp --production
```
安装 0.x 版本
```
npm i vant-weapp -S --production
```

## 插件
- [腾讯位置服务插件](https://lbs.qq.com/miniProgram/plugin/pluginGuide/pluginOverview):pencil2:
腾讯位置服务基于微信提供的小程序插件能力，专注于（围绕）地图功能，打造一系列小程序插件，可以帮助开发者简单、快速的构建小程序。 目前腾讯位置服务提供**路线规划、地图选点、地铁图、城市选择器**四款插件产品，本项目采用了其中的路线规划插件

- [RoutePlan](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx50b5593e81dd937a&token=1123849326&lang=zh_CN) :pencil2:（路线规划）
腾讯官方路线规划插件。提供 **驾车、公交、步行路线规划** 功能。开发者可以将路线规划插件嵌入到自建小程序里，提供给用户路线规划信息。

引入插件
```
  {
  "plugins": {
    "routePlan": {
      "version": "1.0.19",
      "provider": "wx50b5593e81dd937a"
    }
  }
}
```

- 地理编码:pencil2:（将地名或地址转换为经纬度坐标）
实现地理编码（将地名或地址转换为经纬度坐标）通常需要借助微信小程序的wx.request API 和**腾讯地图的地理编码服务**

引入地理编码服务：
```
const QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js'); // 请下载并引入腾讯地图的 JavaScript SDK
```
----
[:bomb:地理位置接口新增与相关流程调整](https://developers.weixin.qq.com/community/develop/doc/000a02f2c5026891650e7f40351c01?blockType=1)

----
>由于考虑到暴露apikey和appid等问题综合考虑，本项目后续考虑闭源
