import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public imagelist = [];
  constructor() { }

  ngOnInit() {
    this.imagelist = [
      {
        id:'1',
        image:'../../assets/food1.jpg',
        description:'Lorem ipsum dolor sit amet.',
        likes:'5'
      },
      {
        id:'2',
        image:'../../assets/profile5.jpg',
        description:'Lorem ipsum dolor sit amet.',
        likes:'2'
      },
      {
        id:'3',
        image:'../../assets/hotel1.jpg',
        description:'Lorem ipsum dolor sit amet.',
        likes:'15'
      },
      {
        id:'4',
        image:'../../assets/gallery4.jpg',
        description:'Lorem ipsum dolor sit amet.',
        likes:'7'
      },
      {
        id:'5',
        image:'../../assets/gallery5.jpg',
        description:'Lorem ipsum dolor sit amet.',
        likes:'51'
      }
    ]
  }

}
