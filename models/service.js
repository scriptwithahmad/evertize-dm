import mongoose from "mongoose";

const ServiceModel = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is Required"],
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Phone Number is Required"],
  },
  serviceName: {
    type: String,
    trim: true,
    required: [true, "Service Name is Required"],
    enum: {
      values: [
        "Social Media Ads",
        "News Paper Ads",
        "Graphic Designing",
        "Outdoor Indoor Ads",
      ],
      default: "Social Media Ads",
      message: "Service Name Found",
    },
  },
  message: {
    type: String,
    trim: true,
    required: [true, "Message is Required"],
  },
});

export default mongoose.models.service ||
  mongoose.model("service", ServiceModel);
