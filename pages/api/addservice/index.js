import addserviceModel from "@/models/addservice";
import dbConnect from "@/config/dbConnect";

export default async function Handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      try {
          const getAll = await addserviceModel.find();
          const count = await addserviceModel.find().count()
        res.status(200).json({
          success: true,
          count,
          message: getAll,
        });
      } catch (error) {
        console.log(error);
      }

      break;
    case "POST":
      try {
        var slug = req.body.title
          .trim()
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--/g, "-");
        const addService = await addserviceModel.create({ ...req.body, slug });
        res.status(201).json({
          success: true,
          message: addService,
        });
      } catch (error) {
        if (error.code === 11000) {
          if (error.keyPattern.title) {
            return res.status(409).json({
              success: false,
              message: "Title Already in Use!",
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
      break;
    default:
      break;
  }

}
