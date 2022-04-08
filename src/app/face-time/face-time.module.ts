import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FaceTimePageRoutingModule} from './face-time-routing.module';

import {FaceTimePage} from './face-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaceTimePageRoutingModule,
  ],
  declarations: [FaceTimePage],
})
export class FaceTimePageModule {
}
