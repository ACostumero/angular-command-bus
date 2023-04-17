import {Inject, Injectable} from '@angular/core';
import {first} from "rxjs";
import {tap} from "rxjs/operators";
import {CommandHandler} from "../../../../../../../projects/command-bus/src/lib/interfaces/command-handler.interface";
import {GetUsersState} from "../../../domain/get-users.state";
import {UsersRepository} from "../../../domain/users.repository.interface";
import {User} from "../../../domain/user.interface";
import {GetAllUsersCommand} from "./get-all-users-command";

@Injectable()
export class GetAllUsersCommandHandler implements CommandHandler {
  constructor(private getUsersState: GetUsersState, @Inject('UsersRepository') private usersRepository: UsersRepository) {
  }
  handle(command: GetAllUsersCommand): void {
    console.log(`%c[${this.constructor.name}] Handle -> ${command.constructor.name}`, "color:coral; font-weight: bold");
    this.usersRepository.getAll().pipe(
      first(),
      tap((users: User[]) => this.getUsersState.save(users))
    ).subscribe({
      error:(e) => console.error('error',e),
      complete:() => console.log(`%c[${this.constructor.name}] completed`, "color:yellowgreen; font-weight: bold"),
    });
  }

}
