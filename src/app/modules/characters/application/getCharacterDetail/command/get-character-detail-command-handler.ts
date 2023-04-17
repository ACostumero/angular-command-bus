import {Inject, Injectable} from '@angular/core';
import {first} from "rxjs";
import {tap} from "rxjs/operators";
import {CommandHandler} from "../../../../../../../projects/command-bus/src/lib/interfaces/command-handler.interface";
import {GetCharacterDetailCommand} from "./get-character-detail-command";
import {CharacterRepository} from "../../../domain/character.repository.interface";
import {GetCharacterDetailState} from "../../../infrastructure/get-character-detail.state";
import {Character} from "../../../domain/character.interface";

@Injectable()
export class GetCharacterDetailCommandHandler implements CommandHandler {
  constructor(private getCharacterState: GetCharacterDetailState, @Inject('CharactersRepository') private characterRepository: CharacterRepository) {
  }
  handle(command: GetCharacterDetailCommand): void {
    console.log(`%c[GetCharacterDetailCommandHandler] Handle -> ${command.constructor.name}`, "color:coral; font-weight: bold");
    this.characterRepository.getById(command.payload).pipe(
      first(),
      tap((character: Character) => this.getCharacterState.store(character))
    ).subscribe({
      error:(e) => console.error('error',e),
      complete:() => console.log(`%c[${this.constructor.name}] completed`, "color:yellowgreen; font-weight: bold"),
    });
  }

}
