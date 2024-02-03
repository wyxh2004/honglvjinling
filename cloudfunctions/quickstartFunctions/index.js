const getOpenId = require('./getOpenId/index');
const getUserInformation = require('./getUserInformation.js');
const demo = require('./demo/demo.js');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'getUserInformation':
      return await getUserInformation.main(event, context);
    case 'demo':
      return await demo.main(event, context);
    // case 'getStarred':
    //   return await getStarred.main(event, context);
    default:
      return 'error';
  }
};
