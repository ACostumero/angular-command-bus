import {Inject, Injectable} from '@angular/core';
import {CharacterRepository} from "../domain/character.repository.interface";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../../app.config";
import {Observable} from "rxjs";
import {Character, CharacterApi, CharactersResponseApi} from "../domain/character.interface";
import {map} from "rxjs/operators";
import {getCharactersMapper} from "./get-characters.mapper";
import {TEntityId} from "../../../core/types/entity-id.type";
import {getCharacterMapper} from "./get-character.mapper";

@Injectable()
export class CharacterService implements CharacterRepository{

  constructor(private client: HttpClient, @Inject(API_URL) private apiUrl: string) { }

  getAll(): Observable<Character[]> {
    return this.client.get<CharactersResponseApi>(this.apiUrl + '/character').pipe(
      map(charactersResponse => getCharactersMapper(charactersResponse.results))
    );
  }

  getById(id: TEntityId): Observable<Character> {
    return this.client.get<CharacterApi>(this.apiUrl + '/character/' + id).pipe(
      map(characterApi => getCharacterMapper(characterApi))
    );
  }
}
