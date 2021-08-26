import { Component, OnInit } from '@angular/core';
import { DocumentacionService} from 'src/app/services/documentacion.service';

@Component({
  selector: 'app-aprobados',
  templateUrl: './aprobados.page.html',
  styleUrls: ['./aprobados.page.scss'],
})
export class AprobadosPage implements OnInit {
  titulo = 'Aprobados';

  constructor() { }

  ngOnInit() {

   

  }

}
