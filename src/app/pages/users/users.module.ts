import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./container/users.component";
import {COMMAND_HANDLERS} from "../../../../projects/command-bus/src/lib/tokens/command-handler.token";
import {
  GetAllUsersCommandHandler
} from "../../modules/users/application/getUsers/command/get-all-users-command-handler";
import {UserService} from "../../modules/users/infrastructure/user.service";
import {API_URL} from "../../app.config";
import {environment} from "../../../environments/environment.development";
import {UsersRoutingModule} from "./users-routing.module";
import {CommandBus} from "../../../../projects/command-bus/src/lib/command-bus";
import {
  CommandHandlerByTokenRegistry
} from "../../../../projects/command-bus/src/lib/resolvers/command-handler-by-token-registry";
import {GetUsersState} from "../../modules/users/domain/get-users.state";

export const apiUrlProvider = {
  provide: API_URL,
  useValue: environment.gitHubApiUrl
};

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    CommandBus,
    CommandHandlerByTokenRegistry,
    GetUsersState,
    apiUrlProvider,
    {provide: COMMAND_HANDLERS, useClass: GetAllUsersCommandHandler, multi: true},
    {provide: 'UsersRepository', useClass: UserService}
  ],
})
export class UsersModule { }
