import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiMusicService } from '../services/api-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

export interface Slide {
  title: string;
  subTitle: string;
  img: string;
  content: string;
  icon: string;
}
interface Artist {
  img: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SlideOps = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 0,
    speed: 400,
  };
  artists: Artist[] = [
    {
      name: 'david',
      img: 'dd',
    },
    {
      name: 'david',
      img: 'dd',
    },
    {
      name: 'david',
      img: 'dd',
    },
    {
      name: 'david',
      img: 'dd',
    },
    {
      name: 'david',
      img: 'dd',
    },
    {
      name: 'david',
      img: 'dd',
    },
  ];
  songs: any[];
  song = {
    playing: false,
    name: '',
    data: {
      href: '',
    },
  };
  albums: any[];
  currentSong: any;

  constructor(
    private apiMusicService: ApiMusicService,
    private modalController: ModalController
  ) {}
  ionViewDidEnter() {
    this.apiMusicService.getNewReleases().subscribe((news) => {
      this.songs = news['albums'].items.filter(
        (e) => e.album_type === 'single'
      );
      this.albums = news['albums'].items.filter(
        (e) => e.album_type === 'album'
      );
    });
  }
  async showSong(artist) {
    this.apiMusicService.getArtistsTopTracks(artist.id).subscribe(
      (songs) => {
        this.showModalSongs(songs);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async showModalSongs(song) {
    console.log(song);

    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: { value: 123, song: song.name, songDta: song },
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.song.name = dataReturned.data.name;
      this.song.data = dataReturned.data;
    });

    await modal.present();
  }
  play() {
    console.log(this.song.data.href);
    this.currentSong = new Audio(this.song.data.href);
    this.currentSong.play();
    this.song.playing = !this.song.playing;
  }
  pause() {
    this.currentSong.pause();
    this.song.playing = !this.song.playing;
  }
}
