import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../app/interfaces/user';
import { ServicesUserProvider } from '../../providers/services-user/services-user';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  user: User;
  friendId: any;
  friends: User[];
  friend: User;
  today:any = Date.now();
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private servicesUserProvider:ServicesUserProvider) {
    this.friendId = this.navParams.get('user');
    console.log(this.friendId);
    //this.friendId = this.servicesUserProvider.getUsers();
    // console.log(this.friends);
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    // console.log(this.friend);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
  }

  // goBack(){
  //   this.navCtrl.setRoot(HomePage);
  // }

}
