import {Observable} from 'rxjs';
import {User} from './user.interface';

export interface UsersRepository {
  getAll(): Observable<User[]>;
}
