import { Component, OnInit } from '@angular/core';
import { DocumentacionService} from 'src/app/services/documentacion.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.page.html',
  styleUrls: ['./documentacion.page.scss'],
})
export class DocumentacionPage implements OnInit {
  titulo = 'Documentación' 
  constructor(private _documentacionService: DocumentacionService,
    private _storageService: StorageService) { }

  ngOnInit() {

    const tokenInfo = this._storageService.localGet('tokenInfo');
  
    this._documentacionService.obtenerDocumentosxClub(tokenInfo.clubId).subscribe(data => {
      console.log(data)
      //this.dismissLoading();
 
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

    this._documentacionService.obtenerDocumentosxUsuarioClub(tokenInfo.clubId, tokenInfo.userId).subscribe(data => {
      console.log(data)
      //this.dismissLoading();
 
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })
  }

}
