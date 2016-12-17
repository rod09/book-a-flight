import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // travel price
  travelPrice: number = 882.01;
  // flights information
  flights = [
    {
      arrival: "16:40",
      company_icon_name: "ios-analytics",
      departure: "14:05",
      from: "AMS",
      stops: 0,
      time_left: "2h35m",
      to: "IBZ"
    },
    {
      arrival: "01:24",
      company_icon_name: "md-analytics",
      departure: "22:34",
      from: "IBZ",
      stops: 0,
      time_left: "2h33m",
      to: "AMS"
    }
  ];

  //default constructor with navCtrl import
  constructor(public navCtrl: NavController) {
    
  }

}
