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
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    // Create token

    // Send sms

    // Registration success
    try {
      const user = new User({ email, phone, password: hash });
      const saveUser = await user.save();
      res.status(200).json({ message: "User saved!", saveUser });
    } catch (error) {
      res.status(500).json({ message: "Failed to save user!", error });
    }
  },

  activate: async (req, res) => {
    // Get token from sms/email
    // Verify token
    // Check if user exist
    // Add new user
    // Activation success
  },

  login: async (req, res) => {
    try {
      const { email, phone, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(400).json({ message: "Auth failed" });
      } else {
        const verifyPassword = await bcrypt.compare(
          password,
          existingUser.password
        ); //returns true or false

        if (!verifyPassword) {
          res.status(401).json({ message: "Wrong credentials!" });
        } else {
          res.status(201).json({ message: "Auth successful!" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Auth errors!", error });
    }
  },
};

export default userController;
