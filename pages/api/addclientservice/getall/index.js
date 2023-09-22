import dbConnect from "@/config/dbConnect";
import serviceModel from "@/models/clientservice";



export default async function Handler(req, res){
    dbConnect()

    try {
        const serviceAll = await serviceModel.find()
        res.status(200).json({
            success: true,
            serviceAll,
          });
    } catch (error) {
        console.log(error)
    }
}


