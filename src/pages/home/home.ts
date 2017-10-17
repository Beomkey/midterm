import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  family: Array<Object> = [];
    
  constructor(public navCtrl: NavController) {
    this.family = [
      {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관', status: 'default'},
      {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관', status: 'default'},
      {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관', status: 'default'},
      {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관', status: 'default'}
      ];
  }

  pushFam() {
    this.family.push({name:'Grandfather', phone_number: '010-1234-0004', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 행복관', status: 'default'});
  }
  markAsLike(fam: any) {
    fam.status = "like";
  }
  removeFam(fam: any) {
    let index = this.family.indexOf(fam);
    if (index > -1) {
      this.family.splice(index, 1);
    }
  }
  goFamDetails(theFam: any) {
    this.navCtrl.push("FamDetailsPage", { fam: theFam });
  }
}

export class Fam {
  name: string;
  phone_number: string;
  address: string;
  status: string;
}
