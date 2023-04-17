import {Component, Inject, OnInit} from '@angular/core';
import {CommandBus} from "../../../../../../projects/command-bus/src/lib/command-bus";
import {
  GetCharacterDetailCommand
} from "../../application/getCharacterDetail/command/get-character-detail-command";
import {Observable} from "rxjs";
import {Character} from "../../domain/character.interface";
import {
  GetCharactersCommand
} from "../../application/getCharacters/command/get-characters-command";
import {GetCharactersState} from "../../infrastructure/get-character.state";
import {GetCharacterDetailState} from "../../infrastructure/get-character-detail.state";

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
    @Inject('GetCharactersState') private readonly getCharactersState: GetCharactersState,
    @Inject('GetCharacterDetailState') private readonly getCharacterDetailState: GetCharacterDetailState,
    ) {}

  ngOnInit(): void {
    this.commandBus.dispatch(new GetCharactersCommand());
  }

  openDetail(characterId: number) {
    this.commandBus.dispatch(new GetCharacterDetailCommand(characterId));
  }

}
