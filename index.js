import app from "./startup/app.js";
import connectDB from "./startup/db.js";
import http from "http";
import startApolloServer from "./graphql/startApolloServer.js";

/** init server */
const server = http.createServer(app);

/** config port from .env */
const port = process.env.PORT || 4000;

/** init apollo server function */
startApolloServer();

/** starting express server */
server.listen(port, () => {
  console.log(`Server started listening on port: ${port}`);
});

/** init DB server */
connectDB();
