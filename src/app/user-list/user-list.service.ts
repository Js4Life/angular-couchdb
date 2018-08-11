import { Injectable } from '@angular/core';

import { USERS } from '../mock/mock-users';
import { User } from '../models/User';

@Injectable()
export class XyzUserListService {

  constructor() { }

  get(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

}