import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPublicadosComponent } from './comentarios-publicados.component';

describe('ComentariosPublicadosComponent', () => {
  let component: ComentariosPublicadosComponent;
  let fixture: ComponentFixture<ComentariosPublicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosPublicadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosPublicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
