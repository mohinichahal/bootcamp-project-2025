import mongoose from "mongoose";

const url = process.env.MONGO_URI as string;

let connection: typeof mongoose | null = null;

const connectDB = async (): Promise<typeof mongoose> => {
  if (connection) {
    return connection; // Return existing cached connection
  }

  if (!url) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  connection = await mongoose.connect(url);
  return connection;
};

export default connectDB;
