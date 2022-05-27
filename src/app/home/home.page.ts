import { Component } from '@angular/core';
import { ApiMusicService } from '../services/api-music.service';

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
  albums: any[];

  constructor(private apiMusicService: ApiMusicService) {}
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
}
