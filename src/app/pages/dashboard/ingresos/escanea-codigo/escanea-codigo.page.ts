import { Component, OnInit } from '@angular/core';
import { IngresoService } from 'src/app/services/ingreso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-escanea-codigo',
  templateUrl: './escanea-codigo.page.html',
  styleUrls: ['./escanea-codigo.page.scss'],
})
export class EscaneaCodigoPage implements OnInit {
  titulo = 'Escanea Código';

  constructor(
    private route: ActivatedRoute,
    private _ingresoService: IngresoService,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.barcodeScanner
      .encode(
        this.barcodeScanner.Encode.TEXT_TYPE,
        this.route.snapshot.params.idEspacio
      )
      .then((qr) => {
        console.log('QR: ', qr);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  mostrarAsistencias() {
    this.router.navigate([
      '/menu/ingresos/listado-ingresos/',
      this.route.snapshot.params.idEspacio,
    ]);
  }
}
