import jwt from "jsonwebtoken";
import config from "../../config";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(403).json({ message: "No token was provided!" });
  } else {
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.json({ message: "Failed to authenticate token!" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

export default authMiddleware;
