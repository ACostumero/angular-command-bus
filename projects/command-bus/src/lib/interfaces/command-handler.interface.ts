import {Command} from "../command.interface";

export interface CommandHandler {
  handle(command: Command): void;
}
