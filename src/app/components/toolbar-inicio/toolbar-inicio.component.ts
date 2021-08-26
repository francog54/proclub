import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-toolbar-inicio',
  templateUrl: './toolbar-inicio.component.html',
  styleUrls: ['./toolbar-inicio.component.scss'],
})
export class ToolbarInicioComponent implements OnInit {
  userInfo;
  constructor(private _storageService: StorageService) { 
    this.userInfo = this._storageService.localGet('userInfo');
  }

  ngOnInit() {  
  
     
  }




}
