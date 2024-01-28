import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false,
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password!: string;
    username: string;
    error: boolean = false;

    constructor(
        private router: Router,
        private _messageService: MessageService
    ) {}

    signIn() {
        if (this.username !== 'admin' || this.password !== 'dummy@123') {
            this.error = true;
            return;
        }
        this.error = false;
        localStorage.clear();
        localStorage.setItem('token', JSON.stringify(true));
        this._messageService.add({
            severity: 'success',
            summary: 'Login',
            detail: `Login Successfully`,
        });
        this.router.navigateByUrl('/');
    }
}
