const path = require('path');
const { GraphQLServer } = require('graphql-yoga');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const userResolvers = require('./graphql/resolvers/User.resolver');
const userSchema = require('./graphql/schemas/User.schema');

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
const graphQlServer = new GraphQLServer({ typeDefs, resolvers });

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

mongoose.connect(
   "mongodb+srv://ruben:XYZatlasRuben@cluster-react-e-shop.2tnke.mongodb.net/react-e-shop?retryWrites=true&w=majority", 
   {  useNewUrlParser: true,
      useUnifiedTopology: true,
   });

mongoose.connection.once("open", () => {
   graphQlServer.start({ endpoint: '/graphql'}, () => console.log('GraphQl is running on localhost:4000'))
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}!`);
});