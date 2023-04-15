import { InjectionToken } from '@angular/core';
import {CommandHandler} from "../interfaces/command-handler.interface";


export const COMMAND_HANDLERS = new InjectionToken<CommandHandler[]>('COMMAND_HANDLERS');
