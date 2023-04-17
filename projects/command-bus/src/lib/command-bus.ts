import {Injectable} from "@angular/core";
import {CommandHandlerByTokenRegistry} from "./resolvers/command-handler-by-token-registry";
import {Command} from "./command.interface";
import {CommandHandler} from "./interfaces/command-handler.interface";

@Injectable({
  providedIn: 'root'
})
export class CommandBus {
  constructor(private handlerResolver: CommandHandlerByTokenRegistry) {}

  dispatch(command: Command): void {
    console.log(`%c[CommandBus] Dispatching -> ${command.constructor.name}`, "color:lightseagreen; font-weight: bold");
    const handler: CommandHandler = this.handlerResolver.resolve(command);
    handler.handle(command);
  }
}
