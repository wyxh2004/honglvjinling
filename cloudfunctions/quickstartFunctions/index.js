const getOpenId = require("./getOpenId/index");
const getStar = require("./getStar");
const register = require("./register");

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case "getOpenId":
      return await getOpenId.main(event, context);
    case "getStar":
      return await getStar.main(event, context);
    case "register":
      return await register.main(event, context);
    default:
      return "error";
  }
};
