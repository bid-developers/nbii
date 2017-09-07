import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Nav } from 'ionic-angular';
//import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
//import { NewsPage } from '../pages/news/news';
import { ChatPage } from '../pages/chat/chat';
import { ServicesPage } from '../pages/services/services';

import { EventsPage } from '../pages/events/events';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage:any = TabsPage;
    pages: Array<{title: string, component: any, icon: any}>;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen) {
/*    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();*/

      this.initializeApp();


      this.pages = [
//          { title: 'Login', component: LoginPage, icon: 'home' },
          { title: 'Chat', component: ChatPage, icon: 'chatboxes'  },
          { title: 'News', component: TabsPage, icon: 'paper' },
//        { title: '', component: GalleryTabPage, icon: 'images'  },
//        { title: 'About', component: HomePage, icon: 'home'  },
//          { title: 'News', component: NewsPage, icon: 'film'  },
          { title: 'Events', component: EventsPage, icon: 'calendar'  },
          { title: 'Services', component: ServicesPage, icon: 'settings'  }
          ,{ title: 'About Us', component: AboutPage, icon: 'bookmarks'  }
          ,{ title: 'Sign Out', component: AboutPage, icon: 'exit'  }



      ];

  }

initializeApp() {
    this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        setTimeout(() => {
            this.splashScreen.hide();
        },100);
        //
    });
}

openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
}
}
