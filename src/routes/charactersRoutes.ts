import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/characters", AuthController.login);
router.get("/character/:id", AuthController.getUserById);

export default router;
