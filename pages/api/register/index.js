import dbConnect from "@/config/dbConnect";
import userModel from "@/models/user";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export default async function Handler(req, res) {
  dbConnect();

  try {
    if (!req.body.userName) {
      res.status(400).json({
        success: false,
        message: "Username Required!",
      });
      return;
    }

    if (!req.body.email) {
      res.status(400).json({
        success: false,
        message: "Email Required!",
      });
      return;
    }

    if (!req.body.password) {
      res.status(400).json({
        success: false,
        message: "Password Required!",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });

    
    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        success: false,
        message: "Email or Username Already in Use!",
      });
    } else if (error.keyPattern.userName) {
      res.status(409).json({
        success: false,
        message: "Username Already in Use!",
      });
    }
    return;
  }
}
