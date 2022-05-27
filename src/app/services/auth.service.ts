import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storeService: StorageService) {}
  async loginUser(credential) {
    try {
      const users = await this.storeService.getUsers();
      const userLogged = users.filter(
        (user) =>
          user.email === credential.email &&
          user.password === credential.password
      );
      console.log(userLogged);
      console.log(userLogged.length);

      if (userLogged.length === 0) {
        console.log('lengt 0');
        return null;
      }
      console.log('user logged');

      return userLogged[0];
    } catch (e) {}

    // return new Promise((rs, rj) => {
    //   if (
    //     credential.email === 'david@gmail.com' &&
    //     credential.password === '123456'
    //   ) {
    //     rs('login accepted');
    //   } else {
    //     rj(' Email or Password are wrong');
    //   }
    // });
  }

  registerUser(data) {
    return this.storeService.saveUser(data);
  }
  logout() {
    this.storeService.logout();
  }
}
