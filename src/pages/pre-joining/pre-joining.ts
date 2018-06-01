import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
/**
 * Generated class for the PreJoiningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pre-joining',
  templateUrl: 'pre-joining.html',
})
export class PreJoiningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreJoiningPage');
  }
  education(){
    this.navCtrl.push(EducationPage);
  }
}
