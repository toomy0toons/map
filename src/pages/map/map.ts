import { AddJobPage } from './../add-job/add-job';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
 AddJobPage = "AddJobPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    //this.AddJobPage = "AddJobPage";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
