import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-cuenta',
  templateUrl: './verificar-cuenta.page.html',
  styleUrls: ['./verificar-cuenta.page.scss'],
})
export class VerificarCuentaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguiente() {
    this.router.navigateByUrl('/cuenta-no-verificada');
  }

}
