import {User, UserApi} from "../domain/user.interface";

export function getAllUsersMapper(usersApi: UserApi[]): User[] {
  return usersApi.map(userApi => ({
    login: userApi.login,
    avatarUrl: userApi.avatar_url,
    url: userApi.url
  }));
}
