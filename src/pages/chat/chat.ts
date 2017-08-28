import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { FirebaseListObservable,
    FirebaseObjectObservable,
    AngularFireDatabase
} from 'angularfire2/database';

//import {UserInfoService} from '../../services/userInfo.service';
//import firebase from 'firebase';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  //  private basePath: string = '/messages';




   items: FirebaseListObservable <any[]>;
        email:any;
    username: any;
    timestamp:any;
    amidisplayname:any;
    //email:(window.localStorage.getItem('displayname'));


    constructor(public navCtrl:NavController,
                private navParams:NavParams,
                private alertCtrl:AlertController,
                 db:AngularFireDatabase
        ) {
        this.email = (window.localStorage.getItem('displayname'));
//        let dateNow = db.firebase.database.ServerValue.TIMESTAMP;
//        console.log(dateNow);
        this.items =  db.list('/nbii-chats',{
            query: {
                orderByChild: 'score'
            }
        });//.map((array) => array.reverse()) as FirebaseListObservable<any[]>;

    }


    createItem(newmessage): void {
       // this.email = (window.localStorage.getItem('displayname'));
 //       this.items.push({messageText: newmessage, messageUser: "test"})
  //      .catch(error => this.handleError(error))

//        this.items.push({message: newmessage, email: this.email, displayname: this.amidisplayname, timestamp: this.timestamp })
//            .catch(error => this.handleError(error))
   }

}
