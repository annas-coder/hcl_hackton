import { Router } from "express";
import { authController } from "../controllers/authController.js";
const router = Router();

router.get("/login", authController.createUser);

export default router