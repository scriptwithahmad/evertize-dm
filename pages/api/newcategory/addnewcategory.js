import dbConnect from "@/config/dbConnect";
import newcategoryModel from "@/models/newcategory";

export default async function handler(req, res) {
  dbConnect();
  try {
    const category = await newcategoryModel.create(req.body);
    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
  }
}
