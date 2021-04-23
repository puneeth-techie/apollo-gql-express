import express from "express";
import dotenv from "dotenv";
import postRoute from "../routes/post.route.js";

/** init .env config */
dotenv.config();

/** init express app */
const app = express();

/** middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
