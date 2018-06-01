import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiftPage } from '../gift/gift';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl:NavController) {

  }
  gotoPage(){
    this.navCtrl.push(GiftPage);
  }
}
