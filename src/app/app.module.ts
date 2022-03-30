import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CameraPreview} from '@awesome-cordova-plugins/camera-preview/ngx';
import {
  AndroidFullScreen,
} from '@awesome-cordova-plugins/android-full-screen/ngx';
import {
  ScreenOrientation,
} from '@awesome-cordova-plugins/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    CameraPreview,
    AndroidFullScreen,
    ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule {
}
