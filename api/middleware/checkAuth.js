import jwt from "jsonwebtoken";
import config from "../../config";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, config.secret);

    // req.userData = decoded;

    res.json({
      message: "Successful!",
    });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Auth failed!" });
  }
};

export default authMiddleware;
