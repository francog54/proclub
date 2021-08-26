import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/app/services/ingreso.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { EspacioService } from 'src/app/services/espacio.service';
import { Espacios } from 'src/app/models/espacios.model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ReservaService } from 'src/app/services/reserva.service';
import { StorageService } from 'src/app/services/storage.service';
import { Ingresos } from 'src/app/models/ingresos.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {
  titulo = 'Ingresos';
  espacios: Espacios[];
  ingresos: Ingresos[] = [];
  tokenInfo;

  constructor(
    private router: Router,
    private ingresoService: IngresoService,
    public actionSheetController: ActionSheetController,
    private espacioService: EspacioService,
    private barcodeScanner: BarcodeScanner,
    private reservaService: ReservaService,
    private storageService: StorageService
  ) {
    this.tokenInfo = this.storageService.localGet('tokenInfo');
    this.ingresoService
      .obtenerIngresoXUsuario(this.tokenInfo.userId)
      .subscribe((data) => {
        this.ingresos = data;
        console.log('INGRESOS: ', data);
      });
  }

  ngOnInit() {}

  async presentActionSheetQR() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona un espacio',
      buttons: this.returnButtons(),
    });
    await actionSheet.present();
  }

  returnButtons() {
    const buttons = [];
    if (this.ingresos.length > 0) {
      this.ingresos.forEach((data) => {
        buttons.push({
          text: data.reserva.turno.espacio.nombre,
          icon: 'football-outline',
          handler: () => {
            console.log('ESPACIO SELECCIONADO', data);
            this.router.navigate(['/menu/ingresos/escanea-codigo/', data.id]);
          },
        });
      });
    }
    return buttons;
  }

  goToScan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
        /* this._dataLocal.guardarRegistro('QRCode', 'http://www.google.com'); */
      });
  }

  goToScanCodigoEspacio(data) {
    console.log('INGRESO SELECCIONADO', data);
    this.ingresoService.ingresoSeleccionado = data;
    this.router.navigate(['/menu/ingresos/escanea-codigo/', data.id]);
  }
}
