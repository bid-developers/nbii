import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { FirebaseListObservable,
    FirebaseObjectObservable,
    AngularFireDatabase
} from 'angularfire2/database';

//import {UserInfoService} from '../../services/userInfo.service';
import firebase from 'firebase';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  //  private basePath: string = '/messages';




    items: FirebaseListObservable <any[]>;
    item: FirebaseObjectObservable <any>;
        email:any;
    username: any;
    timestamp:any;
    amidisplayname:any;
    newmessage:any;
    //email:(window.localStorage.getItem('displayname'));


    constructor(public navCtrl:NavController,
                /*private navParams:NavParams,*/
                private alertCtrl:AlertController,
               public db:AngularFireDatabase, public loadingCtrl: LoadingController
        ) {
        //this.email = (window.localStorage.getItem('displayname'));
//        let dateNow = db.firebase.database.ServerValue.TIMESTAMP;
//        console.log(dateNow);
        this.items =  db.list('/nbii-chats',{
            query: {
                orderByChild: 'messageTime'
            }
        });
        this.timestamp = firebase.database.ServerValue.TIMESTAMP;
        this.presentLoading();

    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Chat is loading, Please wait...",
            duration: 2000
        });
        loader.present();
    }


    createItem(newmessage): void {
       // this.email = (window.localStorage.getItem('displayname'));
        this.items.push({messageText: newmessage, messageUser: "Test", messageTime: this.timestamp})
       .catch(error => this.handleError(error))
        this.newmessage = '';
//        this.items.push({message: newmessage, email: this.email, displayname: this.amidisplayname, timestamp: this.timestamp })
  //          .catch(error => this.handleError(error))
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
