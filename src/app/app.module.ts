import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { AcercaPageModule } from '../pages/acerca/acerca.module';
import { ServicesUserProvider } from '../providers/services-user/services-user';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search';
import { FormsModule } from '@angular/forms';

import {LoginPage} from '../pages/login/login';
import {ConversationPage} from '../pages/conversation/conversation';
import {UserService} from '../services/user';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AuthService} from "../services/auth";
import {ProfilePage} from "../pages/profile/profile";

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Facebook } from '@ionic-native/facebook';

import {ProfilePageModule} from "../pages/profile/profile.module";
import {ConversationService} from "../services/conversation";
import {RequestService} from "../services/request";

import {Camera} from "@ionic-native/camera";
import {Vibration} from "@ionic-native/vibration";




export const firebaseConfig = {
    apiKey: "AIzaSyD0WNhYwP1bhxMLxwVqDTCfUYKmF6pS35s",
    authDomain: "woow-c51ac.firebaseapp.com",
    databaseURL: "https://woow-c51ac.firebaseio.com",
    projectId: "woow-c51ac",
    storageBucket: "woow-c51ac.appspot.com",
    messagingSenderId: "202187262067"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    SearchPipe,
    ConversationPage,
    ProfilePage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AcercaPageModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ListPage,
    LoginPage,
    ConversationPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    UserService,
    AuthService,
    ServicesUserProvider,
    Camera,
    ConversationService,
    Vibration,
    RequestService
  ]
})
export class AppModule {}
