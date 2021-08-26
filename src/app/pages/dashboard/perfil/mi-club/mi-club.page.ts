import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-club',
  templateUrl: './mi-club.page.html',
  styleUrls: ['./mi-club.page.scss'],
})
export class MiClubPage implements OnInit {
  titulo = 'Mi Club'
  club: object;
  form: FormGroup;

  constructor(private _clubService: ClubService,
    private _storageService: StorageService,
    private fb: FormBuilder) { }

  ngOnInit() {

    
    const tokenInfo = this._storageService.localGet('tokenInfo');
  
    this._clubService.obtenerClubesxId(tokenInfo.clubId).subscribe(data => {
      //this.dismissLoading();
      this.club = data;
      console.log(this.club)
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

}
