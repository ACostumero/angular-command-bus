import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User, UserApi} from '../domain/user.interface';

import {UsersRepository} from '../domain/users.repository.interface';
import {API_URL} from "../../../app.config";
import {map} from "rxjs/operators";
import {getAllUsersMapper} from "./getAllUsersMapper";

@Injectable()
export class UserService implements UsersRepository {

  constructor(private client: HttpClient, @Inject(API_URL) private apiUrl: string) { }

  getAll(): Observable<User[]> {
    return this.client.get<UserApi[]>(this.apiUrl + '/users').pipe(
      map(usersApi => getAllUsersMapper(usersApi))
    );
  }
}
