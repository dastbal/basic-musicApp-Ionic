import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Slide } from '../home/home.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides: Slide[] = [
    {
      title: 'Listen Your Music',
      subTitle: 'Any Place',
      img: 'https://picsum.photos/200',
      content: 'Any Place any place  listen yout music',
      icon: 'play',
    },
    {
      title: 'Listen Your Music',
      subTitle: 'Any Place',
      img: 'https://picsum.photos/200',
      content: 'Any Place any place  listen yout music',
      icon: 'play',
    },
    {
      title: 'Listen Your Music',
      subTitle: 'Any Place',
      img: 'https://picsum.photos/200',
      content: 'Any Place any place  listen yout music',
      icon: 'play',
    },
  ];

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}

  async finish() {
    await this.storage.create();
    await this.storage.set('isIntroShowed', true);
    this.router.navigate(['/menu/home']);
  }
}
