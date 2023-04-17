import {Inject, Injectable} from '@angular/core';
import {first} from "rxjs";
import {tap} from "rxjs/operators";
import {CommandHandler} from "../../../../../../../projects/command-bus/src/lib/interfaces/command-handler.interface";
import {UsersRepository} from "../../../domain/users.repository.interface";
import {User} from "../../../domain/user.interface";
import {GetAllUsersCommand} from "./get-all-users-command";
import {State} from "../../../../../core/interfaces/state.interface";

@Injectable()
export class GetAllUsersCommandHandler implements CommandHandler {
  constructor(
    @Inject('GetUsersState') private getUsersState: State,
    @Inject('UsersRepository') private usersRepository: UsersRepository) {
  }
  handle(command: GetAllUsersCommand): void {
    console.log(`%c[${this.constructor.name}] Handle -> ${command.constructor.name}`, "color:coral; font-weight: bold");
    this.usersRepository.getAll().pipe(
      first(),
      tap((users: User[]) => this.getUsersState.store(users))
    ).subscribe({
      error:(e) => console.error('error',e),
      complete:() => console.log(`%c[${this.constructor.name}] completed`, "color:yellowgreen; font-weight: bold"),
    });
  }

}
