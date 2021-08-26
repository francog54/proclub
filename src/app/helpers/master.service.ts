import { Injectable } from '@angular/core';
import { Splash } from '../models/splash.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public splash: Splash = null;

  constructor() { }

  setSplash(splash: Splash) {
    this.splash = splash;
  }
}
