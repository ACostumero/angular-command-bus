import {Command} from "../command.interface";
import {CommandHandler} from "./command-handler.interface";

export interface CommandHandlerRegistry {
  resolve(command: Command): CommandHandler;
}
