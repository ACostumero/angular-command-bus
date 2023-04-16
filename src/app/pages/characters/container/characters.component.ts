import {Component, OnInit} from '@angular/core';
import {CommandBus} from "../../../../../projects/command-bus/src/lib/command-bus";
import {
  GetCharacterDetailCommand
} from "../../../modules/characters/application/getCharacterDetail/command/get-character-detail-command";
import {Observable} from "rxjs";
import {Character} from "../../../modules/characters/domain/character.interface";
import {
  GetCharactersCommand
} from "../../../modules/characters/application/getCharacters/command/get-characters-command";
import {GetCharactersState} from "../../../modules/characters/domain/get-character.state";
import {GetCharacterDetailState} from "../../../modules/characters/domain/get-character-detail.state";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  public characters$: Observable<Character[]> = this.getCharactersState.characters$;
  public characterDetail$: Observable<Character> = this.getCharacterDetailState.character$;

  constructor(
    private readonly commandBus: CommandBus,
    private readonly getCharactersState: GetCharactersState,
    private readonly getCharacterDetailState: GetCharacterDetailState,
    ) {}

  ngOnInit(): void {
    this.commandBus.dispatch(new GetCharactersCommand());
  }

  openDetail(characterId: number) {
    this.commandBus.dispatch(new GetCharacterDetailCommand(characterId));
  }

}
