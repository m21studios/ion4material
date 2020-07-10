import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
    declarations:[
        SidemenuComponent
    ],
    exports:[
        SidemenuComponent
    ],
    imports:[
        CommonModule,
        IonicModule
    ]
})
 
export class ComponentsModule{}