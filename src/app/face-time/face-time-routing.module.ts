import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FaceTimePage} from './face-time.page';

const routes: Routes = [
  {
    path: '',
    component: FaceTimePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceTimePageRoutingModule {
}
