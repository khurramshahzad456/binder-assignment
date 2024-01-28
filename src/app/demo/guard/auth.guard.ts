// auth.guard.ts

import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.checkLogin();
    }

    checkLogin(): boolean {
        // Check if the user is logged in by looking into localStorage or your authentication service
        const isLoggedIn = JSON.parse(localStorage.getItem('token'));

        if (isLoggedIn) {
            return true;
        }

        // If not logged in, redirect to the login page
        this.router.navigate(['/auth/login']);
        return false;
    }
}
