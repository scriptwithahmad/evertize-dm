import dbConnect from "@/config/dbConnect";
import serviceModel from "@/models/clientservice";

export default async function Handler(req, res) {
  dbConnect();

  switch (req.method) {
    //-------------- DELETE POST --------------//
    case "DELETE":
      try {
        const postId = req.query.id;
        const delService = await serviceModel.findByIdAndDelete(postId);

        if (!delService) {
          return res.status(404).json({
            success: false,
            message: "Service not found!",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Service Successfully Deleted",
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Internel Server Error",
        });
      }
      break;
    //-------------- UPDATE POST --------------//
    case "PUT":
      try {
        const postId = req.query.id;
        const updateData = req.body;

        const updateService = await serviceModel.findByIdAndUpdate(
          postId,
          updateData,
          {
            new: true,
          }
        );
        if (!updateService) {
          return res.status(400).json({
            success: false,
            message: "Team Member not Found!",
          });
        }
        return res.status(200).json({
          success: true,
          message: "Team Member Successfully Updated!",
          updateService: updateService,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }

    default:
      return res.status(405).json({
        success: false,
        message: "Method not allowed",
      });
  }
}
