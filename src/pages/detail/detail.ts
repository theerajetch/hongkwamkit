import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  member:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let mid=navParams.get('mid');
    let url = "http://localhost:8080/member/"+ mid ;
    this.http.get(url)
      .map(res=>res.json())
      .subscribe(data => {
        this.member =data;

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  showDetail(id)
  {
    this.navCtrl.push(DetailPage,{mid:id});
  }
}
