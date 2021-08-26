import { ClubInfo } from './../../models/club.model';
import { ClubService } from 'src/app/services/club.service';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-toggle-inicio',
  templateUrl: './toggle-inicio.component.html',
  styleUrls: ['./toggle-inicio.component.scss'],
})
export class ToggleInicioComponent implements OnInit {
  redes = false;
  club: ClubInfo;

  constructor(private clubService: ClubService, public storageService: StorageService,) {
    if (this.storageService.localGet('tokenInfo')) {
      this.clubService.obtenerClubesxId(this.storageService.localGet('tokenInfo').clubId).subscribe(data => {
        this.club = data;
        this.storageService.localSet('clubInfo', data);
      });
    }
  }

  ngOnInit() { }

  redesTogle() {
    this.redes = !this.redes;
  }
}
