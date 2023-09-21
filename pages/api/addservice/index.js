import dbConnect from "@/config/dbConnect";
import ServiceModel from '@/models/service'


export default async function Handler(req,res){
    dbConnect();


    try {
        const addService = await ServiceModel.create(req.body)
        res.status(201).json({
            success: true,
            message: "Service Added Succssfully!",
            addService,
        })
    } catch (error) {
        console.log(error)
    }


}

