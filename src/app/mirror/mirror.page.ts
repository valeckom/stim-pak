import {Component} from '@angular/core';
import {ViewWillEnter} from '@ionic/angular';
import {CameraPreview} from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.page.html',
  styleUrls: ['./mirror.page.scss'],
})
export class MirrorPage implements ViewWillEnter {
  constructor(
    private cameraPreview: CameraPreview,
  ) {
  }

  async ionViewWillEnter() {
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

    await this.cameraPreview.startCamera(options);
  }
}
