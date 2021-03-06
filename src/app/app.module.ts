import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import {FIREBASE_CREDENTIALS } from './app.firebase.config';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { ServicesPage } from '../pages/services/services';
import { ChatPage } from '../pages/chat/chat';
import { AboutPage } from '../pages/about/about';

import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
      AboutPage,
      TabsPage,
      EventsPage,
      ServicesPage,
      ChatPage,
      LoginPage
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      NewsPage,
      TabsPage,
      AboutPage,
      ServicesPage,
      ChatPage,
      EventsPage,
      LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
