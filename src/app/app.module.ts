import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from '../providers/auth/http.factory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { GiftPage } from '../pages/gift/gift';
import { ExplorePage } from '../pages/explore/explore';
import { PreJoiningPage } from '../pages/pre-joining/pre-joining';
import { PostJoiningPage } from '../pages/post-joining/post-joining';
import { EducationPage } from '../pages/education/education';
import { CafeteriaPage } from '../pages/cafeteria/cafeteria';
import { TransportationPage } from '../pages/transportation/transportation';
import { ParkingPage } from '../pages/parking/parking';
import { SignupPage } from '../pages/signup/signup';
import { PolicyPage } from '../pages/policy/policy';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { LeadershipPage } from '../pages/leadership/leadership';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Push } from '@ionic-native/push';
import { AuthProvider } from '../providers/auth/auth';
import { GiftVoucherPage } from '../pages/gift-voucher/gift-voucher';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    GiftPage,
    ExplorePage,
    PreJoiningPage,
    PostJoiningPage,
    EducationPage,
    CafeteriaPage,
    ParkingPage,
    TransportationPage,
    SignupPage,
    PolicyPage,
    AboutPage,
    ProfilePage,
    LeadershipPage,
    GiftVoucherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    GiftPage,
    ExplorePage,
    PreJoiningPage,
    PostJoiningPage,
    EducationPage,
    CafeteriaPage,
    ParkingPage,
    TransportationPage,
    SignupPage,
    PolicyPage,
    AboutPage,
    ProfilePage,
    LeadershipPage,
    GiftVoucherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    Camera,
    HttpClient,
    File,
    FileTransfer,
    AuthProvider,
    Push
  ]
})
export class AppModule { }
