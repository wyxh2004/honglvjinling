const cloud = require('wx-server-sdk')

cloud.init({
    env: CLOUD_DYNAMIC_ENV,
});

const db = cloud.database();

module.exports = async (event, context) => {
    let star = event.star;
    let wxContext = cloud.getWXContext();
}
