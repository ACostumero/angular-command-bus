import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Character} from "./character.interface";
import {CharactersState} from "./characters-state.interface";

@Injectable()
export class GetCharactersState {
  private state: CharactersState = {characters: [], count: 0};
  private source: BehaviorSubject<CharactersState> = new BehaviorSubject(this.state);

  save(characters: Character[]): void {
    this.source.next({characters: [...characters], count: characters.length});
  }

  get characters$(): Observable<Character[]> {
    return this.source.asObservable()
      .pipe(map(state => state.characters));
  }

  get count$(): Observable<number> {
    return this.source.asObservable()
      .pipe(map(state => state.count));
  }
}
