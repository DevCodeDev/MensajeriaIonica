import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User,Status } from '../../app/interfaces/user';

/*
  Generated class for the ServicesUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesUserProvider {

  // friends : User[];

  constructor(public http: HttpClient) {
    console.log('Hello ServicesUserProvider Provider');
  }
    private friends: User[] = [
    {
      nick: 'Juan',
      subnick: 'hola',
      age: 28,
      email: 'hfdkjshd@dhfj.com',
      friend: false,
      active: true,
      status: Status.Online,
      uid: 1
    },
    {
      nick: 'manuel',
      subnick: 'man',
      age: 28,
      email: 'mmmmmmm@dhfj.com',
      friend: true,
      active: true,
      status: Status.AppearOffline,
      uid: 2
    },
    {
      nick: 'paola',
      subnick: 'pao',
      age: 15,
      email: 'paopao@dhfj.com',
      friend: true,
      active: true,
      status: Status.Away,
      uid: 3
    },
    {
      nick: 'kim',
      subnick: 'kim',
      age: 28,
      email: 'kimkim@dhfj.com',
      friend: true,
      active: true,
      status: Status.Busy,
      uid: 4
    },
    {
      nick: 'lao',
      subnick: 'lao',
      age: 28,
      email: 'laolao@dhfj.com',
      friend: true,
      active: true,
      status: Status.AppearOffline,
      uid: 5
    }];
  
    //this.friends = [ usuario1,usuario2,usuario3,usuario4,usuario5 ];
 
  getFriends(){
    return this.friends;
  }
  add(user: User){
    this.friends.push(user);
  }

}
