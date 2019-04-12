import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  member:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let mid=this.navParams.get('keyword');
    let url = "http://localhost:8080/member/"+ mid ; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
