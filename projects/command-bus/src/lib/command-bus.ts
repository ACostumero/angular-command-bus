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
    console.log('dispatch event', command.handlerClass.name)
    const handler: CommandHandler = this.handlerResolver.resolve(command);
    handler.handle(command);
  }
}
