const userResolvers = require("./User.resolver");
const shopItemResolvers = require("./ShopItem.resolver");


const resolvers = [
    userResolvers,
    shopItemResolvers,
];

module.exports = resolvers;