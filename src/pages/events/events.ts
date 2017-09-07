import { Component } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

import { FirebaseListObservable,
    FirebaseObjectObservable,
    AngularFireDatabase
} from 'angularfire2/database';
import firebase from 'firebase';

@Component({
    selector: 'page-events',
    templateUrl: 'events.html'
})

export class EventsPage {
    items: FirebaseListObservable<any[]>;
    rsvpdb: FirebaseListObservable<any[]>;
    interestdb: FirebaseListObservable<any[]>;
counter:any;
    item: FirebaseObjectObservable<any>;
    timestamp:any;
    constructor(public db: AngularFireDatabase, public loadingCtrl: LoadingController,private alertCtrl:AlertController,/*, public navCtrl: NavController*/) {

       // this.counter = this.db.list('/interest').map(list=>list.length).subscribe(length=>window.localStorage.setItem('badgenum1',length));


        this.items =  db.list('/event',{
            query: {
                orderByChild: 'score'
            }
        })

        this.interestdb =  db.list('event/key/collections',{
            query: {
                orderByChild: 'messageTime'
            }
        });

        this.rsvpdb =  db.list('/rsvp',{
            query: {
                orderByChild: 'messageTime'
            }
        });


        this.timestamp = firebase.database.ServerValue.TIMESTAMP;
        //       console.log(this.items)
        this.presentLoading();

    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Events loading, Please wait...",
            duration: 1500
        });
        loader.present();
    }

    interest(key, title){
        console.log("Interest Clicked");
        console.log(key);

        this.interestdb.update(key, {emailadd: (window.localStorage.getItem('currentemail'))})
            .catch(error => this.handleError(error))
        //this.newmessage = '';
    }

    rsvp(title){
        console.log("Interest Clicked");
        console.log(title);

        this.rsvpdb.push({eventname: title, emailadd: (window.localStorage.getItem('currentemail')), messageTime: this.timestamp})
            .catch(error => this.handleError(error))
        //this.newmessage = '';
    }

    private handleError(error){
        //console.log(error)
        let alert = this.alertCtrl.create({
            title: 'Error',
            message: 'Your password and your re-entered password does not match each other.',
            buttons: ['OK']
        });
        alert.present();
        return;
    }
}
