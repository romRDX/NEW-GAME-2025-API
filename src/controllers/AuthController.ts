import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    try {
      const token = await AuthService.authenticate(email, password);
      res.status(200).json({ token });
    } catch (error) {
      // If the error originates from the service, handle appropriately
      if (error instanceof Error && error.message === "Invalid credentials") {
        res.status(401).json({ error: error.message });
      } else {
        // Pass unexpected errors to the error handler middleware
        next(error);
      }
    }
  }

  static async getUserById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "User ID is required." });
      return;
    }

    try {
      const user = await AuthService.findUserById(Number(id));

      if (!user) {
        res.status(404).json({ error: "User not found." });
        return;
      }

      res.status(200).json({ user });
    } catch (error) {
      // Pass unexpected errors to the error handler middleware
      next(error);
    }
  }
}
