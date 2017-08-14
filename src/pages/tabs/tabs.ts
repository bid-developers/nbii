import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { EventsPage } from '../events/events';



@Component({
    selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
//@ViewChild(Navbar) navBar: Navbar;
  tab1Root = NewsPage;
  tab2Root = EventsPage;
  tab3Root = HomePage;
  tab4Root = HomePage;
    constructor() {
    }

}
