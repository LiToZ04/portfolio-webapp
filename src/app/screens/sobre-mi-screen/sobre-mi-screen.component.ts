import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi-screen',
  templateUrl: './sobre-mi-screen.component.html',
  styleUrls: ['./sobre-mi-screen.component.scss']
})
export class SobreMiScreenComponent {
  
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

  public cv(){
    alert('Aun no cargo el cv jajaja')
  }
}
