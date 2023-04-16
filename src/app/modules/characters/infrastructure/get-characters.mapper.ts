import {Character, CharacterApi} from "../domain/character.interface";

export function getCharactersMapper(charactersApi: CharacterApi[]): Character[] {
  return charactersApi.map(characterApi => ({
    id: characterApi.id,
    name: characterApi.name,
    image: characterApi.image,
    species: characterApi.species,
    status: characterApi.status,
  }));
}
