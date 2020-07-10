import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {}

  /* APPS ROUTES */
  goEccomerce(){
    this.menuCtrl.toggle();
    this.router.navigate(['/ecommercetabsmenu/ecommercehome/']);
  }

  goChatApp(){
    this.menuCtrl.toggle();
    this.router.navigate(['/chattabs/contacts/']);
  }

  goGalleryApp(){
    this.menuCtrl.toggle();
    this.router.navigate(['/gallery']);
  }

  goTodoApp(){
    this.menuCtrl.toggle();
    this.router.navigate(['/todo']);
  }

  goMusicApp(){
    this.menuCtrl.toggle();
    this.router.navigate(['/musictabs/music/']);
  }

  goFileUploadApp(){
    this.menuCtrl.toggle();
    this.router.navigate(['/fileupload']);
  }

  /* REGISTERS ROUTES */
  goRegister1(){
    this.menuCtrl.toggle();
    this.router.navigate(['/register1']);
  }

  goRegister2(){
    this.menuCtrl.toggle();
    this.router.navigate(['/register2']);
  }

  goRegister3(){
    this.menuCtrl.toggle();
    this.router.navigate(['/register3']);
  }

  goRegister4(){
    this.menuCtrl.toggle();
    this.router.navigate(['/register4']);
  }

  goRegister5(){
    this.menuCtrl.toggle();
    this.router.navigate(['/register5']);
  }

  /* LOGINS ROUTES */
  gologin1(){
    this.menuCtrl.toggle();
    this.router.navigate(['/login1']);
  }

  gologin2(){
    this.menuCtrl.toggle();
    this.router.navigate(['/login1']);
  }

  gologin3(){
    this.menuCtrl.toggle();
    this.router.navigate(['/login1']);
  }

  gologin4(){
    this.menuCtrl.toggle();
    this.router.navigate(['/login1']);
  }

  gologin5(){
    this.menuCtrl.toggle();
    this.router.navigate(['/login1']);
  }

  /* RECOVERS ROUTES */
  goRecover1(){
    this.menuCtrl.toggle();
    this.router.navigate(['/accountrecover1']);
  }

  goRecover2(){
    this.menuCtrl.toggle();
    this.router.navigate(['/accountrecover2']);
  }

  goRecover3(){
    this.menuCtrl.toggle();
    this.router.navigate(['/accountrecover3']);
  }

  goRecover4(){
    this.menuCtrl.toggle();
    this.router.navigate(['/accountrecover4']);
  }

  goRecover5(){
    this.menuCtrl.toggle();
    this.router.navigate(['/accountrecover5']);
  }

  /* DASHBOARDS ROUTES */
  goDashboard1(){
    this.menuCtrl.toggle();
    this.router.navigate(['/dashboard1']);
  }

  goDashboard2(){
    this.menuCtrl.toggle();
    this.router.navigate(['/dashboard2']);
  }

  goDashboard3(){
    this.menuCtrl.toggle();
    this.router.navigate(['/dashboard3']);
  }

  goDashboard4(){
    this.menuCtrl.toggle();
    this.router.navigate(['/dashboard4']);
  }

  goDashboard5(){
    this.menuCtrl.toggle();
    this.router.navigate(['/dashboard5']);
  }

}
