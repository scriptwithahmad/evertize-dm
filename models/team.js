import mongoose from "mongoose";

const teamModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    design: {
      type: String,
      trim: true,
      required: [true, "Designation is Required"],
    },
    avatar: {
      type: String,
      trim: true,
      required: [true, "Image is Required"],
    },
    userID: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "User ID is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models?.team || mongoose.model("team", teamModel);
