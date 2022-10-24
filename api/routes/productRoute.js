import { Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import productController from "../controllers/productController";
import authMiddleware from "../middleware/checkAuth";

const router = Router();

// Mount
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(morgan("dev"));

// Product Routes
router.post("/api/products", authMiddleware, productController.addNew);
router.get("/api/products", productController.getProducts);

export default router;
