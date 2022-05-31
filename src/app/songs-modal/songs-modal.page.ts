import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage {
  song: any;
  artist: any;
  songDta: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
    console.log(this.navParams);
    this.song = this.navParams.data.song;
    this.artist = this.navParams.data.artist;
    this.songDta = this.navParams.data.songDta;
  }

  async selectSong(song?) {
    await this.modalController.dismiss(song);
  }
}
