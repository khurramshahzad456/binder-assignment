import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from './service/app.layout.service';
import { AppTopBarComponent } from './app.topbar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html',
})
export class AppLayoutComponent {
    @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router
    ) {}
}
