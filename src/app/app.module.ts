import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import {FIREBASE_CREDENTIALS } from './app.firebase.config';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from '../pages/events/events';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
      TabsPage,
      EventsPage
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      NewsPage,
      TabsPage,
      EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
