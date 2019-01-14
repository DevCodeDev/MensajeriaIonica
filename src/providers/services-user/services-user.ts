import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../app/interfaces/user';

/*
  Generated class for the ServicesUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesUserProvider {

  friends : User[];

  constructor(public http: HttpClient) {
    console.log('Hello ServicesUserProvider Provider');
    let usuario1: User = {
      nick: 'Juan',
      subnick: 'hola',
      age: 28,
      email: 'hfdkjshd@dhfj.com',
      friend: false,
      uid: 1
    };
    let usuario2: User = {
      nick: 'manuel',
      subnick: 'man',
      age: 28,
      email: 'mmmmmmm@dhfj.com',
      friend: true,
      uid: 2
    };
    let usuario3: User ={
      nick: 'paola',
      subnick: 'pao',
      age: 15,
      email: 'paopao@dhfj.com',
      friend: true,
      uid: 3
    };
    let usuario4: User ={
      nick: 'kim',
      subnick: 'kim',
      age: 28,
      email: 'kimkim@dhfj.com',
      friend: true,
      uid: 4
    };
    let usuario5: User ={
      nick: 'lao',
      subnick: 'lao',
      age: 28,
      email: 'laolao@dhfj.com',
      friend: true,
      uid: 5
    };
  
    this.friends = [ usuario1,usuario2,usuario3,usuario4,usuario5 ];
  }
  getFriends(){
    return this.friends;
  }

}
