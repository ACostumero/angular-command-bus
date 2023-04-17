import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersComponent} from "./container/characters.component";
import {API_URL} from "../../../app.config";
import {environment} from "../../../../environments/environment.development";
import {COMMAND_HANDLERS} from "../../../../../projects/command-bus/src/lib/tokens/command-handler.token";
import {CharacterService} from "../infrastructure/character.service";
import {CharactersRoutingModule} from "./characters-routing.module";
import {CommandBus} from "../../../../../projects/command-bus/src/lib/command-bus";
import {
  CommandHandlerByTokenRegistry
} from "../../../../../projects/command-bus/src/lib/resolvers/command-handler-by-token-registry";
import {GetCharacterDetailState} from "../infrastructure/get-character-detail.state";
import {
  GetCharactersCommandHandler
} from "../application/getCharacters/command/get-characters-command-handler";
import {
  GetCharacterDetailCommandHandler
} from "../application/getCharacterDetail/command/get-character-detail-command-handler";
import {GetCharactersState} from "../infrastructure/get-characters.state";
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
    {provide: COMMAND_HANDLERS, useClass: GetCharactersCommandHandler, multi: true},
    {provide: COMMAND_HANDLERS, useClass: GetCharacterDetailCommandHandler, multi: true},
    {provide: 'CharactersRepository', useClass: CharacterService},
    {provide: 'GetCharactersState', useClass: GetCharactersState},
    {provide: 'GetCharacterDetailState', useClass: GetCharacterDetailState},
  ],
})
export class CharactersModule { }
