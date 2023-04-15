import {Inject, Injectable, Optional} from "@angular/core";
import {CommandHandler} from "../interfaces/command-handler.interface";
import {Command} from "../command.interface";
import {CommandHandlerRegistry} from "../interfaces/command-handler-registry.interface";
import {COMMAND_HANDLERS} from "../tokens/command-handler.token";

export class CommandHandlerNotRegistered implements Error {
   message = 'CommandInterface handler was not registered';
   name = 'COMMAND_HANDLER_NOT_REGISTERED';
}

@Injectable({
  providedIn: 'root'
})
export class CommandHandlerByTokenRegistry implements CommandHandlerRegistry {
  constructor(@Optional() @Inject(COMMAND_HANDLERS) private handlers: CommandHandler[]) {}
  resolve(command: Command): CommandHandler {
    console.log('resolve command: ', command.handlerClass.name)
    const handler = this.handlers.find(handler => handler instanceof command.handlerClass);
    if(!handler) throw new CommandHandlerNotRegistered();
    return handler;
  }
}
