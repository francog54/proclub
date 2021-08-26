import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAccesoGuard implements CanActivate {

  constructor(private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {


    const token = localStorage.getItem('token');
 
    
    if (!token) {

      this.router.navigate(['splash']);
      return false;
    }

    return true;
    
  }
  
}