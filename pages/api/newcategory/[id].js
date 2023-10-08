import dbConnect from "@/config/dbConnect";
import newcategoryModel from "@/models/newcategory";

export default async function handler(req, res) {
  dbConnect();

  try {
    const deleteCategory = await newcategoryModel.findByIdAndDelete(
      req.query.id
    );
    res.status(201).json({
      success: true,
      message: "Category has been Removed",
    });
  } catch (error) {
    console.log(error);
  }
}
