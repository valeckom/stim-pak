import {Component} from '@angular/core';
import {ViewWillEnter} from '@ionic/angular';
import {CameraPreview} from '@awesome-cordova-plugins/camera-preview/ngx';
import {
  AndroidFullScreen,
} from '@awesome-cordova-plugins/android-full-screen/ngx';
import {
  ScreenOrientation,
} from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.page.html',
  styleUrls: ['./mirror.page.scss'],
})
export class MirrorPage implements ViewWillEnter {
  constructor(
    private cameraPreview: CameraPreview,
    private androidFullscreen: AndroidFullScreen,
    private screenOrientation: ScreenOrientation,
  ) {
  }

  async ionViewWillEnter() {
    await this.screenOrientation.lock('portrait');

    const options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: this.cameraPreview.CAMERA_DIRECTION.FRONT,
      toBack: false,
      tapPhoto: false,
      tapFocus: false,
      previewDrag: false,
      storeToFile: false,
      disableExifHeaderStripping: false,
    };

    if (await this.androidFullscreen.isImmersiveModeSupported()) {
      await this.androidFullscreen.immersiveMode();
    }

    await this.cameraPreview.startCamera(options);
  }
}
