import {Observable} from 'rxjs';
import {Character} from "./character.interface";
import {TEntityId} from "../../../core/types/entity-id.type";

export interface CharacterRepository {
  getAll(): Observable<Character[]>;
  getById(id: TEntityId): Observable<Character>;
}
