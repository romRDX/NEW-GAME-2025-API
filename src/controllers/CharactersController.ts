import { Request, Response, NextFunction } from "express";
import { CharactersService } from "../services/CharactersService";

export class CharactersController {
  static async getAllCharactersFromUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req.query; // Extract userId from query parameters
      if (!userId) {
        res.status(400).json({ error: "User ID is required." });
        return;
      }

      const characters = await CharactersService.getAllCharactersFromUser(
        Number(userId)
      );
      res.status(200).json(characters);
    } catch (error) {
      next(error); // Pass errors to the error handler middleware
    }
  }

  static async getCharacterById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params; // Extract character ID from the route parameter
      const character = await CharactersService.getCharacterById(Number(id));

      if (!character) {
        res.status(404).json({ error: "Character not found." });
        return;
      }

      res.status(200).json(character);
    } catch (error) {
      next(error); // Pass errors to the error handler middleware
    }
  }
}
