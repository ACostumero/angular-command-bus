import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CommandBus} from "../../../../../../projects/command-bus/src/lib/command-bus";

import {User} from "../../domain/user.interface";
import {GetUsersState} from "../../infrastructure/get-users.state";
import {GetAllUsersCommand} from "../../application/getUsers/command/get-all-users-command";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]> = this.usersState.allUsers$;

  constructor(
    private readonly commandBus: CommandBus,
    @Inject('GetUsersState') private readonly usersState: GetUsersState) {}

  ngOnInit(): void {
    this.commandBus.dispatch(new GetAllUsersCommand());
  }

}
