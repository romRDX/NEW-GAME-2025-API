import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/login", AuthController.login);
router.get("/me", AuthController.me);

export default router;
