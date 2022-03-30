import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MirrorPageRoutingModule} from './mirror-routing.module';

import {MirrorPage} from './mirror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MirrorPageRoutingModule,
  ],
  declarations: [MirrorPage],
})
export class MirrorPageModule {
}
