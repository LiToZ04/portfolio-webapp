import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.scss'],
})
export class ContactoScreenComponent implements OnInit{
  contactForm!: FormGroup;
  constructor(
    private router: Router,
    ){}

    ngOnInit(): void {
      
    }

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
