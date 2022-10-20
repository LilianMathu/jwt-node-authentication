import { Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import userController from "../controllers/userController";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(morgan("dev"));

// Routes
router.post("/api/auth/register", userController.register);
router.post("/api/auth/activate", userController.activate);
router.post("/api/auth/login", userController.login);

export default router;
