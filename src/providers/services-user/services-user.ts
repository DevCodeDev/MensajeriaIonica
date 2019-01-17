import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { User,Status } from '../app/interfaces/user';
import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the ServicesUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesUserProvider {

  constructor(public http: HttpClient,
              public angularFireDatabase: AngularFireDatabase) {
    
  }
  public getUsers(){
    return this.angularFireDatabase.list('/users/');
  }
  public getUserById(uid){
      return this.angularFireDatabase.object('/users/' + uid);
  }
  public createUser(user){
      return this.angularFireDatabase.database.ref('/users/' + user.uid).set(user);
  }
  public editUser(user){
      return this.angularFireDatabase.database.ref('/users/' + user.uid).set(user);
  }
   
}
