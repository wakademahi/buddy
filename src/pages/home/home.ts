import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams, LoadingController, Platform, MenuController,ToastController,Content } from 'ionic-angular';

import { GiftPage } from '../gift/gift';
import { AboutPage } from '../about/about';
import { LeadershipPage } from '../leadership/leadership';
import { PolicyPage } from '../policy/policy';
import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { AuthProvider } from '../../providers/auth/auth';
import { GiftVoucherPage } from '../gift-voucher/gift-voucher';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Content) content: Content;
  cards: any = [];
  PrevCards: any = [];
  height; width;
  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public auth: AuthProvider, public platform: Platform, public toastCtrl: ToastController,public imgView:PhotoViewer) {
    this.menu.swipeEnable(false);
    setTimeout(() => {
      this.cards = JSON.parse(localStorage.getItem('cards'));
    }, 300)
    this.height = this.platform.height();
    this.width = this.platform.width();
    console.log(this.height + '==' + this.width);
  }
  
  callFunction() {
    this.content.scrollToBottom(0);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  ionViewDidEnter() {
  
  }
  showNextEvent(flowId, optId) {
    if (localStorage.getItem('cards')) {
      this.PrevCards = JSON.parse(localStorage.getItem('cards'));
    }
    this.auth.getCards(flowId, optId).then((data: any) => {
      console.log(data);
      if (data.cardDetails != null) {
        this.PrevCards.push(data);
        localStorage.setItem('cards', JSON.stringify(this.PrevCards));
        this.cards = JSON.parse(localStorage.getItem('cards'));
        console.log(this.cards);
      } else {
        this.presentToast('Please wait for next update', 'middle');
      }
    });
  }

  optClick(opt, cardKey) {
    console.log(opt);
    var savedCard = JSON.parse(localStorage.getItem('cards'));
    for (let i = 0; i < savedCard.length; i++) {
      if (i == cardKey) {
        savedCard[i].reply = opt;
      }
      localStorage.setItem('cards', JSON.stringify(savedCard));
    }
    console.log(localStorage.getItem('cards'));
    var flowId = 1;
    this.showNextEvent(flowId, opt.buddy_options_id);
  }
  presentToast(message, position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present();
  }
  birthDate;
  cancelDate(date) {
    this.birthDate = '';
  }
  setDate(date) {
    this.birthDate = date;
  }
  openImg(img){
  this.imgView.show(img);
  }
  gotoPage() {
    this.navCtrl.push(GiftVoucherPage);
  }
  aboutPage = false;
  goAbout(data) {
    this.navCtrl.push(AboutPage,{
		val:data
	});
    setTimeout(() => {
      this.aboutPage = true;
    }, 100);
  }
  leaderPage = false;
  goLeaderPage() {
    this.navCtrl.push(LeadershipPage);
    setTimeout(() => {
      this.leaderPage = true;
    }, 100);
  }
  days = false;
  goSafety() {
    this.navCtrl.push(PolicyPage);
    this.days = true;
  }
  edit = false;
  goProfile() {
    this.navCtrl.push(ProfilePage);
    setTimeout(() => {
      this.edit = true;
    }, 100);
  }
  investor = false;
  goInvestor() {
    this.navCtrl.push(PolicyPage);
    this.investor = true;
  }
  goGift() {
    this.navCtrl.push(GiftPage);
  }
  gotoExpore() {
    this.navCtrl.push(ExplorePage);
  }
}
