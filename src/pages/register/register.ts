import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { ServicesUserProvider } from '../../providers/services-user/services-user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user:any = {};
  nick:string = null;
  subnick:string = null;
  email:string = null;
  password:string = null;
  uid:string = null;
  public loading:Loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public angularFireDatabase: AngularFireDatabase,
              private servicesUserProvider:ServicesUserProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Guardar(){


    // console.log("Nombre:" + this.nick);
    // console.log("Nombre:" + this.subnick);
    // console.log("email:" + this.email);
    
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password) 
    .then((data)=>{
      const user = {
        uid:data.user.uid,
        email:this.email,
        nick:this.nick,
        subnick:this.subnick,
      };
      this.servicesUserProvider.createUser(user)
        .then((data2)=>{
          alert("Te enviamos un link a tu correo.");
          // correo 
          var user = firebase.auth().currentUser;
          user.sendEmailVerification().then(function() { 
            //alert("Enviando a tu correo");
            //this.navCtrl.setRoot(LoginPage);
            let alert = this.alertCtrl.create({
              message: "Te enviamos un link a tu correo.",
              buttons: [
                {
                  text: "OK",
                  role: 'cancel',
                  handler: () => {
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
            
          }).catch(function(error) {
            
          });
          console.log(data2)
        }).catch((error)=>{
          console.log("Ocurrio un error");
          console.log(error);
        });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });

    this.navCtrl.setRoot(LoginPage);
  }
  

}
