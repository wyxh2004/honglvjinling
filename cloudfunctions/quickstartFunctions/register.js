const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();
const _ = db.command;
module.exports = async (event) => {
  try {
    let u = event.data;
    // 用户的id
    let wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID;

    // 已注册检测
    let exist = await db
      .collection("userid")
      .where({
        _openid: openId,
      })
      .get();
    if (exist.data[0] && exist.data[0].groupId) {
      return {
        success: false,
        errorMessage: "已注册",
      };
    }

    // 更新小组成员数量
    await db
      .collection("users")
      .where({
        groupId: u.userid,
      })
      .update({
        data: {
          member: _.inc(1),
        },
      });

    await db.collection("users").add({
      data: {
        nickname: u.nickname,
      },
    });
    return {
      success: true,
      code: res.data[0].code,
      groupId: u.userid,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      errorMessage: error.message,
    };
  }
};
