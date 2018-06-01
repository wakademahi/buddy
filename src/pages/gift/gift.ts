import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GiftVoucherPage } from '../gift-voucher/gift-voucher';
import { ExplorePage } from '../explore/explore';

/**
 * Generated class for the GiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gift',
  templateUrl: 'gift.html',
})
export class GiftPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftPage');
  }
  gotoPage(){
    this.navCtrl.push(GiftVoucherPage);
  };
  goHome(){ 
    this.navCtrl.push(HomePage);
  }
  gotoExpore(){
    this.navCtrl.push(ExplorePage);
  }
}
