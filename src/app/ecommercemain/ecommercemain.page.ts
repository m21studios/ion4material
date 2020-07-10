import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommercemain',
  templateUrl: './ecommercemain.page.html',
  styleUrls: ['./ecommercemain.page.scss'],
})
export class EcommercemainPage implements OnInit {

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
