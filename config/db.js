import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // terminate the process
  }
};

export default connectDB;
