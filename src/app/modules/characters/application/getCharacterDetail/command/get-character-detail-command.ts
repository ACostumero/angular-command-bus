import {Command} from "../../../../../../../projects/command-bus/src/lib/command.interface";
import {GetCharacterDetailCommandHandler} from "./get-character-detail-command-handler";
import {TEntityId} from "../../../../../core/types/entity-id.type";


export class GetCharacterDetailCommand implements Command {
  handlerClass = GetCharacterDetailCommandHandler;
  payload: TEntityId;

  constructor(characterId: TEntityId) {
    this.payload = characterId;
  }

}
