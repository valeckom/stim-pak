import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MirrorPage} from './mirror.page';

const routes: Routes = [
  {
    path: '',
    component: MirrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MirrorPageRoutingModule {
}
