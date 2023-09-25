import mongoose from "mongoose";

const addServiceModel = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Title is Required!"],
    },
    slug:{
        type:String,
        unique:true,
        trim:true,
        required:[true,"Slug is Required!"],
    },
    desc: {
      type: String,
      trim: true,
      required: [true, "Please write some Description!"],
    },
    avatar: {
      type: String,
      trim: true,
      required: [true, "Image is Required"],
    },
    author: {
      type: String,
      trim: true,
      required: [true, "Author Name is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.addService ||
  mongoose.model("addService", addServiceModel);
