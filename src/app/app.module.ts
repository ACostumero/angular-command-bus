import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {API_URL} from "./app.config";
import {environment} from "../environments/environment.development";
import {UsersComponent} from "./pages/users/users.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {COMMAND_HANDLERS} from "../../projects/command-bus/src/lib/tokens/command-handler.token";
import {UserService} from "./modules/users/infrastructure/user.service";
import {UsersRepository} from "./modules/users/domain/users.repository.interface";
import {GetAllUsersCommandHandler} from "./modules/users/application/getUsers/command/get-all-users-command-handler";

export const apiUrlProvider = {
  provide: API_URL,
  useValue: environment.apiUrl
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    apiUrlProvider,
    {provide: COMMAND_HANDLERS, useClass: GetAllUsersCommandHandler, multi: true},
    {provide: 'UsersRepository', useClass: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
