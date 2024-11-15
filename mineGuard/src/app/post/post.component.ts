import { Component } from '@angular/core';
import {EncabezadoPostComponent} from './encabezado-post/encabezado-post.component';
import {ComentariosPublicadosComponent} from './comentarios-publicados/comentarios-publicados.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    EncabezadoPostComponent,
    ComentariosPublicadosComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
