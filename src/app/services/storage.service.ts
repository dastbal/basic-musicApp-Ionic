import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  users = [];

  constructor(private storage: Storage) {
    //create admin
    this.storage.create();
  }

  async saveUser(v) {
    this.users = await this.getUsers();
    const usersSaved = await this.getUsers();
    const newtId = parseInt(usersSaved.pop().id, 10) + 1;
    const user = { id: newtId, ...v };
    this.users.push(user);

    this.storage.set('users', this.users);
  }
  async getUsers() {
    const u = await this.storage.get('users');
    if (u === null) {
      return [
        {
          id: 1,
          name: 'david',
          email: 'david@gmail.com',
          password: '123456',
        },
      ];
    }
    return u;
  }
  logout() {
    this.storage.remove('isUserLoggedIn');
  }
}
