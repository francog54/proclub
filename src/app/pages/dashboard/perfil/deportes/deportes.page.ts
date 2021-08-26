import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubService } from 'src/app/services/club.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.page.html',
  styleUrls: ['./deportes.page.scss'],
})
export class DeportesPage implements OnInit {
  titulo = 'Deportes';
  form: FormGroup;
  listDeportes: any[] = [];

  constructor(
    private _clubService: ClubService,
    private _storageService: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const tokenInfo = this._storageService.localGet('tokenInfo');

    this._clubService.obtenerDisciplinasByIdClub(tokenInfo.clubId).subscribe(
      (data) => {
        //this.dismissLoading();
        this.listDeportes = data;
        console.log(this.listDeportes);
      },
      (error) => {
        //this.dismissLoading();
        console.log(error);
        //this.mensaje('Opss.. ocurrio un error');
      }
    );
  }
}
