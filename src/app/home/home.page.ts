import {Component} from '@angular/core';
import {ViewWillEnter} from '@ionic/angular';
import {
  AndroidFullScreen,
} from '@awesome-cordova-plugins/android-full-screen/ngx';
import {
  ScreenOrientation,
} from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillEnter {

  constructor(
    private androidFullscreen: AndroidFullScreen,
    private screenOrientation: ScreenOrientation,
  ) {
  }

  async ionViewWillEnter() {
    try {
      await this.screenOrientation.lock('portrait');
    } catch (e) {
      if (e.name === 'NotSupportedError') {
        console.log('screenOrientation is not supported');
      } else {
        console.error(e);
      }
    }

    if (await this.androidFullscreen.isImmersiveModeSupported()) {
      await this.androidFullscreen.immersiveMode();
    }
  }
}
