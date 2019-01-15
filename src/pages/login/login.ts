import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {};
  nick:string = null;
  email:string = null;
  password:string = null;
  observador:any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public angularFireDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  ingresar(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(function (){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("usuario logeado");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log("usuario no logeado");
          // ...
        }
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
    
       
  }

  register(){
    this.navCtrl.setRoot(RegisterPage)
  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }


}





