import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {

  public slideOpts:any;

  constructor() { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 1,
      speed: 400,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 2,
      slidesPerView: 3
    };
  }

}
