import {Inject, Injectable} from '@angular/core';
import {first} from "rxjs";
import {tap} from "rxjs/operators";
import {CommandHandler} from "../../../../../../../projects/command-bus/src/lib/interfaces/command-handler.interface";
import {GetCharactersCommand} from "./get-characters-command";
import {CharacterRepository} from "../../../domain/character.repository.interface";
import {Character} from "../../../domain/character.interface";
import {GetCharactersState} from "../../../domain/get-character.state";

@Injectable()
export class GetCharactersCommandHandler implements CommandHandler {
  constructor(private getCharactersState: GetCharactersState, @Inject('CharactersRepository') private characterRepository: CharacterRepository) {
  }
  handle(command: GetCharactersCommand): void {
    console.log('handle GetCharactersCommandHandler')
    this.characterRepository.getAll().pipe(
      first(),
      tap((characters: Character[]) => this.getCharactersState.save(characters))
    ).subscribe({
      next:(v) => console.log('next',v),
      error:(e) => console.error('error',e),
      complete:() => console.log('complete'),
    });
  }

}
