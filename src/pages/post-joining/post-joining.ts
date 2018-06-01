import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
/**
 * Generated class for the PostJoiningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-joining',
  templateUrl: 'post-joining.html',
})
export class PostJoiningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad PostJoiningPage');
  }
  gotoPage(){
    this.navCtrl.push(ExplorePage);
  }
}
