import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public contactList:any = [];
  public contactOnline:any = [];

  constructor() { }

  ngOnInit() {
    this.contactList = [
      {
        name:'Jhon Doe',
        imageprofile:'../../assets/profile5.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Ana Kreust',
        imageprofile:'../../assets/profile6.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Michael Parker',
        imageprofile:'../../assets/profile2.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Chris Reus',
        imageprofile:'../../assets/profile4.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
    ]

    this.contactOnline = [
      {
        name:'Jhon Doe',
        imageprofile:'../../assets/profile1.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Ana Kreust',
        imageprofile:'../../assets/profile8.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Michael Parker',
        imageprofile:'../../assets/profile3.jpg',
        state:'Lorem ipsum dolor sit amet.'
      }
    ]
  }

}
