import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreJoiningPage } from '../pre-joining/pre-joining';
import { PostJoiningPage } from '../post-joining/post-joining';
import { CafeteriaPage } from '../cafeteria/cafeteria';
import { TransportationPage } from '../transportation/transportation';
import { ParkingPage } from '../parking/parking';
import { HomePage } from '../home/home';
import { LeadershipPage } from '../leadership/leadership';
 
@Component({
  selector: 'page-explore-ionic',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  page:string='explore';
  constructor(public navCtrl:NavController) {

  }
  gotoHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  nextPage(page){
    if(page=='preJoining'){
      console.log('Pre');
      this.navCtrl.push(PreJoiningPage);
    }else if(page=='postJoining'){
      console.log('Post');
      this.navCtrl.push(PostJoiningPage);
    }else if(page=='cafeteria'){
      console.log('Cafeteria');
      this.navCtrl.push(CafeteriaPage);
    }else if(page=='transportation'){
      console.log('transport');
      this.navCtrl.push(TransportationPage);
    }else if(page=='parking'){
      console.log('parking');
      this.navCtrl.push(ParkingPage);
    }else if(page=='establish'){
      console.log('establish');
    }else if(page=='organization'){
      console.log('organization');
    }else if(page=='leadership'){
      console.log('leadership');
      this.navCtrl.push(LeadershipPage);
    }else if(page=='resource'){
      console.log('Resource');
    }else if(page=='contacts'){
      console.log('contact');
    }
  }
}
