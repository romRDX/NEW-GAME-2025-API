import { UserRepository } from "../repositories/UserRepository";
import jwt from "jsonwebtoken";

const SECRET_KEY = "seu_segredo_aqui";

export class AuthService {
  static async authenticate(email: string, password: string): Promise<string> {
    const user = await UserRepository.findByEmail(email);

    if (!user || user.password !== password) {
      throw new Error("Credenciais inválidas.");
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "24h",
    });

    return token;
  }
}
