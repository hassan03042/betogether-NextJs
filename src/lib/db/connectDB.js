import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URL);
    console.info("MongoDb Connected");
  } catch (error) {
    console.log("err in connection=>", err);
  }
}
