import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-verificacion',
  templateUrl: './mensaje-verificacion.page.html',
  styleUrls: ['./mensaje-verificacion.page.scss'],
})
export class MensajeVerificacionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/menu');
    }, 4000);
  }

}
