import { Component } from '@angular/core';
import { IonicPage,  NavController, Loading, LoadingController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

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
  public loading:Loading;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public angularFireDatabase: AngularFireDatabase) {
                
                this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  ingresar(){
    // console.log("Nick:" + this.nick);
    // console.log("Email:" + this.email);
    // console.log("Password:" + this.password);
 
    this.afAuth.auth.signInWithEmailAndPassword(
      this.email, 
      this.password).then(() => {
      console.log("Usuario Logeado");
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
     this.loading.dismiss().then( () => {
       let alert = this.alertCtrl.create({
        message: err.message,
        buttons: [
          {
            text: "OK",
            role: 'cancel'
          }
        ] 
       });
       alert.present();
     });
    });
 
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
 
  goToSignup(){
   this.navCtrl.push('SignupPage');
  }

  register(){
    this.navCtrl.setRoot(RegisterPage)
  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }


}





