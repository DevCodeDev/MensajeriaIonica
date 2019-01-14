import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import { User } from '../../app/interfaces/user';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  friends: User[];
  query:string = '';
  constructor(public navCtrl: NavController,
              private servicesUserProvider:ServicesUserProvider) {
    
    this.friends = this.servicesUserProvider.getFriends();
  }

  goToConversation(user:User){
    this.navCtrl.push(ConversationPage,{
      'user': user 
    });
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
