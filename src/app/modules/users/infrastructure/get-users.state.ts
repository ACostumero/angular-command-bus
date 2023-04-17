import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../domain/user.interface';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {UsersState} from "../domain/users-state.interface";
import {State} from "../../../core/interfaces/state.interface";

@Injectable()
export class GetUsersState implements State {
  private state: UsersState = {users: [], count: 0};
  private source: BehaviorSubject<UsersState> = new BehaviorSubject(this.state);

  store(users: User[]): void {
    this.source.next({users: [...users], count: users.length});
  }

  get allUsers$(): Observable<User[]> {
    return this.source.asObservable()
      .pipe(map(state => state.users));
  }

  get count$(): Observable<number> {
    return this.source.asObservable()
      .pipe(map(state => state.count));
  }
}
