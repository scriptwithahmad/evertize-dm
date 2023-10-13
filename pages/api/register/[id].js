import dbConnect from "@/config/dbConnect";
import userModel from "@/models/user";



export default async function Handler(req, res) {
    dbConnect();
  
    switch (req.method) {

      case "DELETE":
        try {
          const postId = req.query.id;
          const delPost = await userModel.findByIdAndDelete(postId);
  
          if (!delPost) {
            return res.status(404).json({
              success: false,
              message: "User not found",
            });
          }
  
          return res.status(200).json({
            success: true,
            message: "User Successfully Deleted",
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            success: false,
            message: "Internel Server Error",
          });
        }
        break;
  
      default:
        return res.status(405).json({
          success: false,
          message: "Method not allowed",
        });
    }
  }

