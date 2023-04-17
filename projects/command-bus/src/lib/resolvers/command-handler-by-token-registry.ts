import {Inject, Injectable, Optional} from "@angular/core";
import {CommandHandler} from "../interfaces/command-handler.interface";
import {Command} from "../command.interface";
import {CommandHandlerRegistry} from "../interfaces/command-handler-registry.interface";
import {COMMAND_HANDLERS} from "../tokens/command-handler.token";
import {CommandHandlerNotRegistered} from "../errors/command-handler-not-registered.error";

@Injectable()
export class CommandHandlerByTokenRegistry implements CommandHandlerRegistry {
  constructor(@Optional() @Inject(COMMAND_HANDLERS) private handlers: CommandHandler[]) {}
  resolve(command: Command): CommandHandler {
    console.log(`%c[CommandHandlerRegistry] Trying to resolve -> ${command.handlerClass.name}`, "color:steelblue; font-weight: bold");
    const handler = this.handlers.find(handler => handler instanceof command.handlerClass);
    if(!handler) throw new CommandHandlerNotRegistered();
    return handler;
  }
}
