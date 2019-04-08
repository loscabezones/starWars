import { Injectable } from '@angular/core';
import { findIndex } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users = [];
  alertmessage: string;
  isAlertFail: boolean;
  isAlertSuccess: boolean;
  loginSuccessful: boolean = false;

  constructor() {

    const user1 = { username: '1234', password: '1234' }
    this.users.push(user1);

  }

  public verificationMessage(alertmessage: string) {
    this.alertmessage = alertmessage;
    this.isAlertFail = false;
    this.isAlertSuccess = true;
    setTimeout(() => { this.isAlertSuccess = false; }, 4000);
  }

  public errorMessage(alertmessage: string) {
    this.alertmessage = alertmessage;
    this.isAlertSuccess = false;
    this.isAlertFail = true;
    setTimeout(() => { this.isAlertFail = false; }, 4000);
  }

  login(dataUser: object) {
    let result: boolean = false;
    this.users.forEach(element => {
      if ((element['username'] === dataUser['username']) && (element['password'] === dataUser['password'])) {
        result = true;
      }
    });

    return result;
  }

  contolDuplucate(user: object) {

    const index = findIndex(this.users, (item) => {
      return (item['username'] === user['username']);
    });

   return !(index === -1);
  }

}
