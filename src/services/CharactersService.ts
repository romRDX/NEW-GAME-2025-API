import { CharactersRepository } from "../repositories/CharactersRepository";

export class CharactersService {
  static async getAllCharactersFromUser(userId: number) {
    return CharactersRepository.getAllCharactersByUserId(userId);
  }

  static async getCharacterById(characterId: number) {
    return CharactersRepository.getCharacterById(characterId);
  }
}
