import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TappyPageRoutingModule} from './tappy-routing.module';

import {TappyPage} from './tappy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TappyPageRoutingModule,
  ],
  declarations: [TappyPage],
})
export class TappyPageModule {
}
