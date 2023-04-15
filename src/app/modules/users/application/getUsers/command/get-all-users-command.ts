import {Command} from "../../../../../../../projects/command-bus/src/lib/command.interface";
import {GetAllUsersCommandHandler} from "./get-all-users-command-handler";


export class GetAllUsersCommand implements Command {
  handlerClass = GetAllUsersCommandHandler;
}
