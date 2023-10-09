import dbConnect from "@/config/dbConnect";
import userModel from "@/models/user";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import { GenAccessToken } from "@/helpers/jwt";

export default async function Handler(req, res) {
  dbConnect();

  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and Password are Required!",
      });
      return;
    }

    // Find user by email
    const foundUser = await userModel.findOne({ email });

    if (!foundUser) {
      res.status(404).json({
        success: false,
        message: "Invalid email or Password!",
      });
      return;
    }

    // Compare provided password with hashed password
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: "Invalid Password!",
      });
      return;
    }

    const AccessToken = await GenAccessToken({
      email: foundUser.email,
      id: foundUser._id,
      userName: foundUser.userName,
      isAdmin: foundUser.isAdmin,
    });

    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", AccessToken, {
        path: "/",
        httpOnly: true,
        secure: true,
      })
    );

    var user = {
      id: foundUser._id,
      email: foundUser.email,
      name: foundUser.fullName,
      isAdmin: foundUser.isAdmin,
      userName: foundUser.userName,
    };


    res.json({
      user,
      success: true,
    });

    // If email and password are valid

    res.status(200).json({
      success: true,
      message: "User Login Successful!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
