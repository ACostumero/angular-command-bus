import {BehaviorSubject, filter, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Character} from "./character.interface";
import {CharacterState} from "./character-state.interface";

@Injectable()
export class GetCharacterDetailState {
  private state: CharacterState = {character: {} as Character};
  private source: BehaviorSubject<CharacterState> = new BehaviorSubject(this.state);

  save(character: Character): void {
    this.source.next({character});
  }

  get character$(): Observable<Character> {
    return this.source.asObservable()
      .pipe(map(state => state.character), filter((character) => !!character.id));
  }
}
