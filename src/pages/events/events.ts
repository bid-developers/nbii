import { Component } from '@angular/core';


import { FirebaseListObservable,
    FirebaseObjectObservable,
    AngularFireDatabase
} from 'angularfire2/database';

@Component({
    selector: 'page-events',
    templateUrl: 'events.html'
})

export class EventsPage {
    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
    constructor(public db: AngularFireDatabase/*, public navCtrl: NavController*/) {

        this.items =  db.list('/event',{
            query: {
                orderByChild: 'score'
            }
        })
        //       console.log(this.items)
    }
    /*    return():void {
     this.navCtrl.setRoot(HomePage);
     }*/
}
