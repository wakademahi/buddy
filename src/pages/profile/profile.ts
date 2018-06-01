import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GiftVoucherPage } from '../gift-voucher/gift-voucher';
import { ExplorePage } from '../explore/explore';
 
@Component({
  selector: 'page-profile-ionic',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public navCtrl:NavController) {

  }
  gotoHomePage(){
    this.navCtrl.push(HomePage);
  }
  gotoExpore(){
    this.navCtrl.push(ExplorePage);
  }
  gotoGiftVoucher(){
    this.navCtrl.push(GiftVoucherPage);
  }
}
