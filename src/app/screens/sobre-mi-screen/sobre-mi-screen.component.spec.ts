import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiScreenComponent } from './sobre-mi-screen.component';

describe('SobreMiScreenComponent', () => {
  let component: SobreMiScreenComponent;
  let fixture: ComponentFixture<SobreMiScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreMiScreenComponent]
    });
    fixture = TestBed.createComponent(SobreMiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
