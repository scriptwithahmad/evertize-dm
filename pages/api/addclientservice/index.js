import dbConnect from "@/config/dbConnect";
import ServiceModel from "@/models/clientservice";

export default async function Handler(req, res) {
  dbConnect();

  try {
    const addService = await ServiceModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Service Added Succssfully!",
      addService,
    });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res.status(409).json({
          success: false,
          message: "Email Already in Use!",
        });
      }
    }
    // Error Handle for Required Fields
    if (error.message?.split(":")[2]?.split(",")[0]?.trim()) {
      var errMessage = error.message.split(":")[2].split(",")[0].trim();
      return res.status(400).json({
        success: false,
        message: errMessage,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}
