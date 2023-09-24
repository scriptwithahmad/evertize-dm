import teamModel from "../../../models/team";
import dbConnect from "@/config/dbConnect";

export default async function Handler(req, res) {
  dbConnect();

  try {
    const createTeam = await teamModel.create(req.body);
    res.status(201).json({
      success: true,
      createTeam,
    });
  } catch (error) {
    console.log(error);
    if (error.message?.split(":")[2]?.split(",")[0]?.trim()) {
      var errMessage = error.message.split(":")[2].split(",")[0].trim();
      return res.status(400).json({
        success: false,
        message: errMessage,
      });
    }
  }
  res.status(500).json({
    success: false,
    message: "Internal Server Error!",
  });
}
