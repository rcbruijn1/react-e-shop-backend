const userSchema = require('./User.schema');
const shopItemSchema = require('./ShopItem.schema');

const typeDefs = `
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${userSchema}
    ${shopItemSchema}
`;

module.exports = typeDefs;