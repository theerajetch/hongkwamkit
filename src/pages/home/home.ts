import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NewmemberPage } from '../newmember/newmember';

//import { ResultPage } from '../result/result';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members:any=0;
  data:any;
  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http, private alertCtrl:AlertController){
  this.getData();
  }
  showDetail(id){
    this.navCtrl.push(DetailPage,{memberid: id});
  }
  showNewmember(){
    this.navCtrl.push(NewmemberPage);
  }
  getData(){
    this.http.get('http://localhost:8080/member')
    .map(res=>res.json())
    .subscribe(data=>{
      this.members = data;});
  }
  ionViewWillEnter(){
    this.getData();
  }
  deleteData(id){
    this.alertCtrl.create({title:"confirm", subTitle: "Confirm Delete",
    buttons:[
      {
      text:"Yes",
      handler:()=>{
        let url="http://localhost:8080/member/" + id;
    this.http.delete(url)
      .subscribe(res=>{
        this.data=res;
        console.log(this.data);
        this.showAlert("Success", "Data deleted");
        this.getData();
      });

      }
    },
    {
      text:"No",
      handler:()=>{}
    }
  ]
    
  })
      .present();
    
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
