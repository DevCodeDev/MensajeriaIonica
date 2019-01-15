import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import { User, Status } from '../../app/interfaces/user';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  friends: User[];
  query:string = '';
  status: Status;
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

  getIconByStatus(status){
    let icon = '';
    switch(status){
      case 'Online':
        icon = 'logo_live_online.png';
          break;
      case 'Offline':
        icon = 'logo_live_offline.png';
          break;
      case 'Busy':
        icon = 'logo_live_busy.png';
          break;
      case 'Away':
        icon = 'logo_live_away.png';
          break;
      case 'AppearOffline':
        icon = 'logo_live_appear_offline.png';
          break;
    }
    return icon;
  }

}
