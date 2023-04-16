import {Command} from "../../../../../../../projects/command-bus/src/lib/command.interface";
import {GetCharactersCommandHandler} from "./get-characters-command-handler";


export class GetCharactersCommand implements Command {
  handlerClass = GetCharactersCommandHandler;
}
