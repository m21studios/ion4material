import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  public data:Array<any> = new Array();
  public todoData:any;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async saveToList(){
     
    const alert = await this.alertController.create({
      header: 'Save to ToDo list',
      inputs: [
        {
          name: 'textinfo',
          type: 'text',
          placeholder: 'Write something.'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (alerData) => {
            console.log('Confirm Ok');
            this.todoData = alerData.textinfo;
            this.data.push(this.todoData);
            console.log('Datos almacenados: ', this.data);
          }
        }
      ]
    });

    await alert.present();
    
  }

}
