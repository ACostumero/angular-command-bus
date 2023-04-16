import {Character, CharacterApi} from "../domain/character.interface";

export function getCharacterMapper(characterApi: CharacterApi): Character {
  return {
    id: characterApi.id,
    name: characterApi.name,
    image: characterApi.image,
    species: characterApi.species,
    status: characterApi.status,
  };
}
