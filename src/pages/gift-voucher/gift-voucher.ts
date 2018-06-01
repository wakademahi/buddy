import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';

/**
 * Generated class for the GiftVoucherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gift-voucher',
  templateUrl: 'gift-voucher.html',
})
export class GiftVoucherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftVoucherPage');
  }

  gotoExpore(){
    this.navCtrl.push(ExplorePage);
  }
}
