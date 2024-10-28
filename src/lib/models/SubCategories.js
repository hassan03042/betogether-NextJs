import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  category:{type : mongoose.Types.ObjectId, ref : "Categories"}
});

export const SubCategoriesModal = mongoose.model("SubCategories", subcategoriesSchema);
