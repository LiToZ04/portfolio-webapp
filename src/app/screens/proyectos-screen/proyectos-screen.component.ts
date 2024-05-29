import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-screen',
  templateUrl: './proyectos-screen.component.html',
  styleUrls: ['./proyectos-screen.component.scss']
})
export class ProyectosScreenComponent {

  constructor(
    private router: Router,
    ){}

  public goHome() {
    this.router.navigate([""])
  }
  

  public goSobreMi(){
    this.router.navigate(["sobre-mi"])
  }

  public goProyectos(){
    this.router.navigate(["proyectos"])
  }

  public goContacto(){
    this.router.navigate(["contacto"])
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }
}
