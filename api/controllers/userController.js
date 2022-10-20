import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import config from "../../config";

const userController = {
  register: async (req, res) => {
    // Get info from the input fields

    const { email, phone, password } = req.body;

    // Verify the info
    if (!(email && phone && password)) {
      return res.status(400).json({ message: "Enter required fields!" });
    }

    // Ensure email address is unique
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is registered!" });
    }

    // Ensure password length mathces the requiement lenth
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters!" });
    }
    // Hash password

    // Create token

    // Send sms

    // Registration success
  },
  activate: async (req, res) => {
    // Get token from sms/email
    // Verify token
    // Check if user exist
    // Add new user
    // Activation success
  },
  login: async (req, res) => {},
};

export default userController;