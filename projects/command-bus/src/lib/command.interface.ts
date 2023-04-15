import {CommandHandler} from "./interfaces/command-handler.interface";
import {Class} from "./types/class.type";

export interface Command {
  handlerClass: Class<CommandHandler>;
  payload?: unknown;
}
