import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ClubService } from 'src/app/services/club.service';
import { Club } from '../../../class/club.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/helpers/master.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  listClubesCambiar: Club[];
  listClubesAgregar: Club[];
  clubCambiar: Club;
  clubAgregar: Club;
  menu: any[] = [];
  loading: HTMLIonLoadingElement;
  userInfo;
  tokenInfo;
  cantidadClubes: Number;
  @ViewChild('selectAgregar') selectAgregar: IonicSelectableComponent;

  constructor(
    private _menuService: MenuService,
    private router: Router,
    private _storageService: StorageService,
    private _clubService: ClubService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private actRoute: ActivatedRoute,
    private masterService: MasterService
  ) {
    this.userInfo = this._storageService.localGet('userInfo');
    this.tokenInfo = this._storageService.localGet('tokenInfo');
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.obtenerMenu();
    this.obtenerClubes();
    this.obtenerCLubesDeUsuario();
  }

  obtenerCLubesDeUsuario() {
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes;
      this.loading.present();
      console.log(this.tokenInfo.userId);
      this._clubService.obtenerClubesxUsuario(this.tokenInfo.userId).subscribe(
        (data) => {
          this.listClubesCambiar = data;
          this.cantidadClubes = data.length;

          this.dismissLoading();
        },
        (error) => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        }
      );
    });
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenInfo');
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
  }

  obtenerMenu() {
    this._menuService.getMenuSocio().subscribe((data) => {
      this.menu = data;
      console.log(data);
    });
  }

  clubChangeCambiar(event: {
    component: IonicSelectableComponent;
    value: any;
  }) {
    this.clubSeleccionadoCambiar(event.value.id);
    console.log('club:', event.value.id);
  }

  clubChangeAgregar(event: {
    component: IonicSelectableComponent;
    value: any;
  }) {
    this.clubSeleccionadoAgregar(event.value.id);
    console.log('club:', event.value.id);
  }

  clubSeleccionadoCambiar(idClub) {
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes;
      this.loading.present();

      this._clubService.obtenerDisciplinasByIdClub(idClub).subscribe(
        (data) => {
          // this.listDisciplina = data;
          this.dismissLoading();
        },
        (error) => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        }
      );
    });
  }

  clubSeleccionadoAgregar(idClub) {
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes;
      this.loading.present();

      this._clubService.obtenerDisciplinasByIdClub(idClub).subscribe(
        (data) => {
          // this.listDisciplina = data;
          this.dismissLoading();
          this.router.navigateByUrl('/menu/agregar-club/' + idClub);
        },
        (error) => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        }
      );
    });
  }

  agregarClub() {
    this.selectAgregar.open();
  }

  obtenerClubes() {
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes;
      //this.loading.present()

      this._clubService.obtenerClubes().subscribe(
        (data) => {
          this.dismissLoading();
          this.listClubesAgregar = data;
        },
        (error) => {
          this.dismissLoading();
          console.log(error);
          this.mensaje('Opss.. ocurrio un error');
        }
      );
    });
  }

  presentLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
    return new Promise((resolve) => {
      resolve(
        this.loadingController.create({
          message: 'Espere...',
        })
      );
    });
  }

  async dismissLoading(): Promise<void> {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  async mensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'dark',
      duration: 3000,
    });
    toast.present();
  }
}
