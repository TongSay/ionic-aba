import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';

 
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 1000,
      title:"Saving Summary",

     
      space: -10,
      outerStrokeGradient: true,
     
      
      outerStrokeGradientStopColor: "#53a9ff",
      
      
      animateTitle: false,
      
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      lazy: true
      
    })
  ],
  providers: [],
 
  declarations: [AccountPage]
})
export class AccountPageModule {}
