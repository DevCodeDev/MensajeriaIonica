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
import { ConversationPageModule } from '../pages/conversation/conversation.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AcercaPageModule } from '../pages/acerca/acerca.module';
import { ServicesUserProvider } from '../providers/services-user/services-user';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchPipe } from './pipes/search';
import { FormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';



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
    RegisterPage,
    SearchPipe  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    ConversationPageModule,
    ProfilePageModule,
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesUserProvider
  ]
})
export class AppModule {}
