import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Fam } from '../home/home';
/**
 * Generated class for the FamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fam-details',
  templateUrl: 'fam-details.html',
})
export class FamDetailsPage {
  famInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.famInfo = navParams.data.fam;
  }
}
