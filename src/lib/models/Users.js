import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  password: String,
  location: {
    lat: Number,
    long: Number,
  },
  fullname: String,
  email: String,
  profileImg: String,
  address: String,
  bio: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
