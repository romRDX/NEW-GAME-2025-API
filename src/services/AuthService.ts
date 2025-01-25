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

  static async findUserById(id: number): Promise<any> {
    // Fetch the user by ID using the repository
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new Error("User not found.");
    }

    // Return the user object, excluding sensitive data like the password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
