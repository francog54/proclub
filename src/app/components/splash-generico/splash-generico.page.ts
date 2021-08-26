import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/helpers/master.service';

@Component({
  selector: 'app-splash-generico',
  templateUrl: './splash-generico.page.html',
  styleUrls: ['./splash-generico.page.scss'],
})
export class SplashGenericoPage implements OnInit {
  constructor(public masterService: MasterService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate([this.masterService.splash.redirecTo]);
    }, 3000);
  }
}
