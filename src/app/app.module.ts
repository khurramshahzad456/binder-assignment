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
import { CartComponent } from './demo/components/cart/cart.component';
@NgModule({
    declarations: [AppComponent, WishlistComponent, CartComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppLayoutModule,
        SidebarModule,
        ToastModule,
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
