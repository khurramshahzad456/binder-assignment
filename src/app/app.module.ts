import { NgModule } from '@angular/core';
import {
    PathLocationStrategy,
    LocationStrategy,
    CommonModule,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { CoursesService } from './demo/service/course.service';
import { WishlistComponent } from './demo/components/wishlist/wishlist.component';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CartComponent } from './demo/components/cart/cart.component';
import { ProfileComponent } from './demo/components/profile/profile.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './demo/components/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
@NgModule({
    declarations: [
        AppComponent,
        WishlistComponent,
        CartComponent,
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppLayoutModule,
        SidebarModule,
        ToastModule,
        ButtonModule,
        MultiSelectModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        CheckboxModule,
        PasswordModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        CoursesService,
        MessageService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
