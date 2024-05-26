import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosScreenComponent } from './proyectos-screen.component';

describe('ProyectosScreenComponent', () => {
  let component: ProyectosScreenComponent;
  let fixture: ComponentFixture<ProyectosScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosScreenComponent]
    });
    fixture = TestBed.createComponent(ProyectosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
