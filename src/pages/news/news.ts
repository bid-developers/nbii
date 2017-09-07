import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.news = db.list('/news');
      this.presentLoading();

  }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Latest News loading, Please wait...",
            duration: 1000
        });
        loader.present();
    }

}
