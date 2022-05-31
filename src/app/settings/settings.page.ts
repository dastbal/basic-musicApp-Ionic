import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType, CameraSource, Camera } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  image = 'https://picsum.photos/200';
  picture: SafeResourceUrl;

  constructor(private sanitize: DomSanitizer) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    this.picture = this.sanitize.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }
}
