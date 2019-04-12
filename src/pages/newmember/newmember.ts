import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';

import { HttpClient } from '@angular/common/http';
import { AlertController } from "ionic-angular";

//import 'rxjs/add/operator/map';
//import {Http} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-newmember',
  templateUrl: 'newmember.html',
})
export class NewmemberPage {
  member ={
    IDMem:"",
    NameMem:"",
    PassMem:"",
    NicknameMem:"",
    EmailMem:"",
    TelMem:""

  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewmemberPage');
  }
  addmember(){
    let url="http://localhost:8080/member";
    this.http.post(url, this.member)
      .subscribe(
        res=>{
          this.data = res;
          if(this.data.msg==true){
            this.showAlert("Success","Data added");
            this.navCtrl.popToRoot();
          }

        }
      );
    

  } 
  showAlert(msgtitle:string, message:string){
    const alert = this.alertCtrl.create({
      title:msgtitle, 
      subTitle:message,
      buttons: ["OK"]
    });

    alert.present();
  }
}
