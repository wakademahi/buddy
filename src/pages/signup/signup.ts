import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  height;
  width;
  domainPage = true;
  signInPage = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public auth: AuthProvider, public loadingCtrl: LoadingController, public platform: Platform, public alertCtrl: AlertController) {
    this.menu.swipeEnable(false);

    this.height = this.platform.height();
    this.width = this.platform.width();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  addDomain(value) {
    var domainName = value.replace('www.', '');
    domainName = value.replace('WWW.', '');
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: "Are you sure it's correct domain : http://" + domainName,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.domainPage = true;
            this.signInPage = false;
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            localStorage.setItem('domain', domainName);
            this.domainPage = false;
            this.signInPage = true;
          }
        }
      ]
    });
    confirm.present();
  }
  ShowOtp = false;
  showOtpDiv = false;
  otp: any;
  checkNumber(val) {
    if (val.length == 10) {
      this.ShowOtp = true
    } else {
      this.ShowOtp = false;
    }
  }
  tempId;
  sendOtp(val) {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      enableBackdropDismiss: false,
      dismissOnPageChange: true
    });
    loader.present();
    this.auth.authenticate(val).then((data: any) => {
      console.log(data);
      if (data.status == 'Sent OTP') {
        loader.dismiss();
        // this.otp = data.signInOTPList.otp;
        this.tempId = data.user_id;
        this.showOtpDiv = true;
        this.ShowOtp = false;
      } else {
        loader.dismiss();
        this.showOtpDiv = false;
        this.ShowOtp = true;
      }
    });
  }

  next(el) {
    el.setFocus();
  }
  otpAdd = [];
  res = [];
  verify(val) {
    let newOtp = val.otp1 + '' + val.otp2 + '' + val.otp3 + '' + val.otp4;
    // this.navCtrl.push(HomePage);
    console.log(newOtp + '==' + this.otp);
    this.auth.verify(newOtp, this.tempId).then((data: any) => {
      if (data.status == 'success') {
        var name = data.first_name + ' ' + data.last_name;
        localStorage.setItem('userName', name);
        localStorage.setItem('userId', data.user_id);
        this.auth.getCards(1, '').then((data: any) => {
          if (data.cardDetails != null) {
            this.res.push(data);
            localStorage.setItem('cards', JSON.stringify(this.res));
            setTimeout(() => {
              this.navCtrl.setRoot(HomePage);
            }, 100);
          }
        });
      } else {
        localStorage.clear();
      }
    });
  }

}

