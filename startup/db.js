import mongoose from "mongoose";

const connectDB = () => {
  try {
    const url = process.env.DB_URL;
    const conn = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`DB connected successfully on: ${conn.connections.host}`);
  } catch (error) {
    console.log(`Cannot connect to the DB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
