import dbConnect from "@/config/dbConnect";
import newcategoryModel from "@/models/newcategory";

export default async function handler(req, res) {
  dbConnect();

  try {
    const getcat = await newcategoryModel.find();
    res.status(201).json({
      success: true,
      getcat,
    });
  } catch (error) {
    console.log(error);
  }
}
