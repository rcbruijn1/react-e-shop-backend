const shopItemSchema = 

`extend type Query {
    getShopItem(id: ID!): ShopItem
    getShopItems: [ShopItem]
  }
  type ShopItem {
      id: ID!
      title: String!
      price: Float!
      description: String!
      category: String!
      image: String!
  }
  extend type Mutation {
      addShopItem(title: String!, price: Float!, description: String!, category: String!, image: String!): ShopItem!,
      deleteShopItem(id: ID!): String
  }`;

  module.exports = shopItemSchema;