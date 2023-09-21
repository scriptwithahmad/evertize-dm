import UserModel from '@/models/user'
import dbConnect from '@/config/dbConnect'
import bcrypt from "bcryptjs"

export default async function Handler(req,res) {
    dbConnect();


    try {
        const User = await UserModel.create(req.body)
        res.status(201).json({
            success: true,
            message: "User Created Successfully!",
            User,
        })
    } catch (error) {
        console.log(error)
    }


}

