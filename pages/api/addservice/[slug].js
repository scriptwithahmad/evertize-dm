import dbConnect from "@/config/dbConnect";
import addserviceModel from "@/models/addservice";

export default async function Handler(req, res) {
  dbConnect();

  switch (req.method) {
    // Get SINGLE POST -----------------------------------
    case "GET":
      try {
        const singleService = await addserviceModel.findOne({
          slug: req.query.slug,
        });
        if (!singleService) {
          return res.status(404).json({
            success: false,
            message: "Service not Found!",
          });
        }
        res.status(200).json({
          success: true,
          singleService,
        });
      } catch (error) {
        res.status(404).json({
          success: false,
          error,
        });
      }

      break;

    case "DELETE":
      try {
        const singleServiceFind = await addserviceModel.findOne({
          slug: req.query.slug,
        });
        if (!singleServiceFind) {
          res.status(404).json({
            success: false,
            message: "Service Not Found!",
          });
        } else {
          const delService = await addserviceModel.findByIdAndDelete(
            singleServiceFind._id
          );
          res.status(200).json({
            success: true,
            message: "Service Successfully Deleted!",
          });
        }
      } catch (error) {
        res.status(404).json({
          success: false,
          error,
        });
      }

      break;

    case "PUT":
      try {
        const singleServiceFind = await addserviceModel.findOne({
          slug: req.query.slug,
        });
        if (!singleServiceFind) {
          res.status(404).json({
            success: false,
            message: "Service Not Found!",
          });
        } else {
          const updateService = await addserviceModel.findByIdAndUpdate(
            singleServiceFind._id,
            {
              $set: {
                ...req.body,
                slug: req.body.title
                  .trim()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--/g, "-"),
              },
            },
            { new: true }
          );
          res.status(200).json({
            success: true,
            updateService,
          })
        }
      } catch (error) {
        res.status(404).json({
          success: false,
          error,
        });
      }
    default:
      break;
  }
}
