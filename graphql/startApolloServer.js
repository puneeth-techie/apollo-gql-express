import { ApolloServer } from "apollo-server-express";
import typeDefs from "../graphql/typeDefs.js";
import resolvers from "../graphql/resolvers.js";
import app from "../startup/app.js";

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
};

export default startApolloServer;
