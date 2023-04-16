import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersComponent} from "./container/characters.component";
import {API_URL} from "../../app.config";
import {environment} from "../../../environments/environment.development";
import {COMMAND_HANDLERS} from "../../../../projects/command-bus/src/lib/tokens/command-handler.token";
import {CharacterService} from "../../modules/characters/infrastructure/character.service";
import {CharactersRoutingModule} from "./characters-routing.module";
import {CommandBus} from "../../../../projects/command-bus/src/lib/command-bus";
import {
  CommandHandlerByTokenRegistry
} from "../../../../projects/command-bus/src/lib/resolvers/command-handler-by-token-registry";
import {GetCharacterDetailState} from "../../modules/characters/domain/get-character-detail.state";
import {
  GetCharactersCommandHandler
} from "../../modules/characters/application/getCharacters/command/get-characters-command-handler";
import {
  GetCharacterDetailCommandHandler
} from "../../modules/characters/application/getCharacterDetail/command/get-character-detail-command-handler";
import {GetCharactersState} from "../../modules/characters/domain/get-character.state";
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const apiUrlProvider = {
  provide: API_URL,
  useValue: environment.rickAndMortiApiUrl
};

@NgModule({
  declarations: [CharactersComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers: [
    apiUrlProvider,
    CommandBus,
    CommandHandlerByTokenRegistry,
    GetCharactersState,
    GetCharacterDetailState,
    {provide: COMMAND_HANDLERS, useClass: GetCharactersCommandHandler, multi: true},
    {provide: COMMAND_HANDLERS, useClass: GetCharacterDetailCommandHandler, multi: true},
    {provide: 'CharactersRepository', useClass: CharacterService}
  ],
})
export class CharactersModule { }