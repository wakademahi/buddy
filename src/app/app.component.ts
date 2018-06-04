import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController, App } from 'ionic-angular';
import { ExplorePage } from '../pages/explore/explore';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
//import { PolicyPage } from '../pages/policy/policy';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GiftVoucherPage } from '../pages/gift-voucher/gift-voucher';
import { AboutPage } from '../pages/about/about';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public push: Push,
    public app: App,
  ) {
    this.initializeApp();
    this.initPushNotification();
    //localStorage.setItem('token', '4141');
    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Explore', component: ExplorePage },
      { title: 'SignUp', component: SignupPage },
      { title: 'About', component: AboutPage },
      { title: 'Gift', component: GiftVoucherPage },
      { title: 'Logout', component: '' },
    ];
    splashScreen.show();
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 2000);
    }

  }
  confirmAlert: any;
  showedAlert: boolean;
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      let userId = localStorage.getItem('userId');
      if (userId != '' && userId != undefined) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = SignupPage;
        localStorage.clear();
      }
      this.platform.registerBackButtonAction(() => {
        if (this.nav.length() == 1) {
          if (!this.showedAlert) {
            this.confirmExitApp();
          } else {
            this.showedAlert = false;
            this.confirmAlert.dismiss();
          }
        }
        const overlayView = this.app._appRoot._overlayPortal._views[0];
        if (overlayView && overlayView.dismiss) {
          overlayView.dismiss();
        } else {

        }
        this.nav.pop();
      });
    });
  }
  confirmExitApp() {
    this.showedAlert = true;
    this.confirmAlert = this.alertCtrl.create({
      title: "Confirmation",
      message: "Are you sure you want to exit?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.showedAlert = false;
            return;
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ], enableBackdropDismiss: false
    });
    this.confirmAlert.present();
  }

  openPage(page) {
    if (page.component != '') {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    } else {
      localStorage.removeItem('domain');
      this.nav.setRoot(SignupPage);
    }
  }
  initPushNotification() {
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
    this.push.createChannel({
      id: "testchannel1",
      description: "My first test channel",
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 3
    }).then(() => console.log('Channel created'));
    // Delete a channel (Android O and above)
    this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
    // Return a list of currently configured channels
    this.push.listChannels().then((channels) => console.log('List of channels', channels))
    // to initialize push notifications
    const options: PushOptions = {
      android: {
        senderID: "1034821955957",
        vibrate: true,
        forceShow: true,
        icon: 'small budy',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
