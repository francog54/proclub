import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ingresar-datos',
  templateUrl: './ingresar-datos.page.html',
  styleUrls: ['./ingresar-datos.page.scss'],
})
export class IngresarDatosPage implements OnInit {

  form: FormGroup

  constructor(private router: Router, 
              private fb: FormBuilder,
              private _usuarioService: UsuarioService) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  siguiente() { 
    this._usuarioService.nombre = this.form.value.nombre;
    this._usuarioService.apellido = this.form.value.apellido;
    this._usuarioService.documento = this.form.value.documento;
    this.router.navigateByUrl('/login/ingresar-password');
  }



}
