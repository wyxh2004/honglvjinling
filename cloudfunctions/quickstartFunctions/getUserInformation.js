const cloud = require('wx-server-sdk');

//envid:honglvjinling-0g7519ot1e8f297cs
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = database();

module.exports = async (event) => {
    let u = event.data;
    let wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID; //用户openid
    let user_num = await db.collection('userInformation').count(); //用户数量
    let userid = parseInt(user_num.total) + 1; //用户编号
    //userInformation
    await db.collection('userInformation').add({
        data: {
            leader: u.nickname, //用户昵称
            region: u.region,  //用户地区
            code: u.code, //用户邀请码
            gender: u.gender, //用户性别
            openId, //用户openid
            userid, //用户编号
        },
    });
    return {
        success: true,
        userid, //用户编号
    };
}   