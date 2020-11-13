const ShopItem = require('../../mongoose/ShopItem.model');

const shopItemResolvers = {
    Query: {
      getShopItems: () => ShopItem.find(),
      getShopItem: async (_,{id}) => {
        const result = await ShopItem.findById(id);
        return result;
    }
},
    Mutation: {
        addShopItem: async (_, { title, price, description, category, image }) => {
            const shopItem = new ShopItem({title, price, description, category, image});
            await shopItem.save();
            return shopItem;
        },
        deleteShopItem: async (_, {id}) => {
            await ShopItem.findByIdAndRemove(id);
            return "ShopItem deleted";
        }
    }
  };

  module.exports = shopItemResolvers;