import { NgModule } from '@angular/core';
import {CommandBus} from "./command-bus";
import {CommandHandlerByTokenRegistry} from "./resolvers/command-handler-by-token-registry";



@NgModule({
  providers: [CommandBus, CommandHandlerByTokenRegistry]
})
export class CommandBusModule { }
