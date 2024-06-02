import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {

 let authService =  inject(AuthService);
 let routerService =  inject(Router);
 if (!authService.isLoggedIn()) {
     routerService.navigate(['/login']);
     return false ;
 }

  return true;
};
