import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from 'src/app/services/storage.service';
import {
  AlertController,
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Beneficio } from 'src/app/models/beneficio.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listNotificaciones: any[] = [];
  listDeportes: any[] = [];
  listTurnos: any[] = [];
  beneficios: Beneficio[];
  format = '';
  text = '';
  redes = false;
  loading: HTMLIonLoadingElement;
  userInfo;
  tokenInfo;

  slideOptsBeneficios = {
    initialSlide: 1,
    speed: 400,
  };

  slideOptsNotificaciones = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public _storageService: StorageService,
    private _dashboardService: DashboardService
  ) {
    this.userInfo = this._storageService.localGet('userInfo');
    this.tokenInfo = this._storageService.localGet('tokenInfo');
  }

  ngOnInit() {
    this._dashboardService
      .obtenerDashboard(this.tokenInfo.clubId, this.tokenInfo.userId)
      .subscribe(
        (data) => {
          console.log(data);
          this.listNotificaciones = data.notificaciones;
          this.listDeportes = data.disciplinasxclub;
          this.listTurnos = data.turnos;
          this.beneficios = data.beneficios;
          //this.dismissLoading();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  redesTogle() {
    this.redes = !this.redes;
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);

        if (!barcodeData.cancelled) {
          /* this._dataLocal.guardarRegistro(barcodeData.format, barcodeData.text); */
          this.format = barcodeData.format;
          this.text = barcodeData.text;
          console.log(barcodeData);
        }
      })
      .catch((err) => {
        console.log('Error', err);
        /* this._dataLocal.guardarRegistro('QRCode', 'http://www.google.com'); */
      });
  }
}
