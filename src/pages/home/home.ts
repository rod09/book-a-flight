import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flights = [
    {
      from: "AMS",
      to: "IBZ",
      departure: "14:05",
      remaining_time: "2h35m",
      arrival_time: "16:40",
      stops: 0,
      agent_icon: "ios-analytics"
    }
  ]; 
  constructor(public navCtrl: NavController) {
    
  }

}
