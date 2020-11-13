const User = require('../../mongoose/User.model');

const userResolvers = {
    Query: {
      getUsers: () => User.find(),
      getUser: async (_,{id}) => {
        const result = await User.findById(id);
        return result;
    }
},
    Mutation: {
        addUser: async (_, { fullname, username, password }) => {
            const user = new User({fullname, username, password});
            await user.save();
            return user;
        },
        deleteUser: async (_, {id}) => {
            await User.findByIdAndRemove(id);
            return "User deleted";
        }
    }
  };

  module.exports = userResolvers;