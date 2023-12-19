const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 修改数据库信息云函数入口函数
exports.main = async (event, context) => {
  const {OPENID} = cloud.getWXContext();
  try {
    const { keyword } = event;
    const timestamp = Date.now();

    // 在云数据库中插入搜索记录
    const result = await db.collection('search_records').add({
      data: {
        openid: OPENID,
        keyword,
        timestamp,
      },
    });

    return {
      code: 0,
      msg: 'Record saved successfully',
      data: result,
    };
  } catch (error) {
    return {
      code: 1,
      msg: 'Failed to save record',
      data: error,
    };
  }
};
