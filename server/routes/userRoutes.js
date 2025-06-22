import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { userDetailSchema } from "../middleware/validation-schema/userSchema.js";
import { validator } from "../middleware/validation/validator.js";
const router = Router();

router.get("/", userController.getAllUser);
router.post("/createUser", validator(userDetailSchema) ,userController.createUser);

export default router;