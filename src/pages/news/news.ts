import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.news = db.list('/news');
  }

}
