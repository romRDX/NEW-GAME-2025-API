import { User } from "../models/User";

const users: User[] = [
  { id: 1, email: "user@example.com", password: "password123" },
];

export class UserRepository {
  static async findByEmail(email: string): Promise<User | null> {
    const user = users.find((u) => u.email === email);
    return user || null;
  }

  static async findById(id: number): Promise<User | null> {
    const user = users.find((u) => u.id === id);
    return user || null;
  }
}
