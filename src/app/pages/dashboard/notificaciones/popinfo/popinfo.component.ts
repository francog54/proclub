import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  constructor(private router: Router, private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  goToCreateNotifications() {
    this.router.navigate(['/menu/notificaciones/crear-notificaciones'])
    this.popoverCtrl.dismiss(null, null, 'popinfo')
  }

  goToCreateSurvey() {
    this.router.navigate(['/menu/notificaciones/crear-encuesta'])
    //this.router.navigateByUrl('/crear-encuesta');
    this.popoverCtrl.dismiss(null, null, 'popinfo')
  }

}
