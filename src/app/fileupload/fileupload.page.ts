import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.page.html',
  styleUrls: ['./fileupload.page.scss'],
})
export class FileuploadPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
      {
        text: 'From Main Storage',
        icon: 'folder',
        handler: () => {
          console.log('main storage');
        }
      }, {
        text: 'From External',
        icon: 'folder-open',
        handler: () => {
          console.log('external extorage');
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
