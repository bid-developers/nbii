import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { EventsPage } from '../pages/events/events';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
    rootPage:any = TabsPage;
    pages: Array<{title: string, component: any, icon: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

      this.pages = [
          { title: 'Main Menu', component: TabsPage, icon: 'home' },
//        { title: '', component: GalleryTabPage, icon: 'images'  },
//        { title: 'About', component: HomePage, icon: 'home'  },
          { title: 'News', component: NewsPage, icon: 'film'  },
          { title: 'Events', component: EventsPage, icon: 'flag'  },
          { title: 'Services', component: TabsPage, icon: 'people'  }


];

  }



openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);


}

