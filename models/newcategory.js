import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
    },
  },

  { timestamps: true }
);

export default mongoose?.models?.newcategory ||
  mongoose?.model("newcategory", catSchema);