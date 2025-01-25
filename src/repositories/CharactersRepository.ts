interface Character {
  id: number;
  name: string;
  userId: number;
}

const characters: Character[] = [
  { id: 1, name: "Warrior", userId: 1 },
  { id: 2, name: "Mage", userId: 1 },
  { id: 3, name: "Rogue", userId: 2 },
];

export class CharactersRepository {
  static getAllCharactersByUserId(userId: number): Character[] {
    return characters.filter((character) => character.userId === userId);
  }

  static getCharacterById(characterId: number): Character | null {
    return characters.find((character) => character.id === characterId) || null;
  }
}
