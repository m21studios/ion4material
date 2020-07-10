import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 2,
    spaceBetween: 5,
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay:{
      delay:4000
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
