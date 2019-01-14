import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

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
import { ConversationPage } from '../pages/conversation/conversation';
import { ProfilePage } from '../pages/profile/profile';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPipe  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
