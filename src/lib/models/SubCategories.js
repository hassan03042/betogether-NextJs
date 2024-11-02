import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
  title:  {type : String, required: true},
  description: String,
  thumbnail:  {type : String, required: true},
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const SubCategoriesModal = mongoose.models.SubCategories || mongoose.model(
  "SubCategories",
  subcategoriesSchema
);
