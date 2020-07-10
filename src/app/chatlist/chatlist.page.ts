import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

  public contactList:any = [];
  constructor() { }

  ngOnInit() {
    this.contactList = [
      {
        name:'Ana Kreust',
        imageprofile:'../../assets/profile6.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
      {
        name:'Chris Reus',
        imageprofile:'../../assets/profile4.jpg',
        state:'Lorem ipsum dolor sit amet.'
      },
    ]
  }

}
