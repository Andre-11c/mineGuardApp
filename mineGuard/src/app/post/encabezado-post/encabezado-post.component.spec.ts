import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPostComponent } from './encabezado-post.component';

describe('EncabezadoPostComponent', () => {
  let component: EncabezadoPostComponent;
  let fixture: ComponentFixture<EncabezadoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
