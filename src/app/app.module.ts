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
@NgModule({
    declarations: [AppComponent, WishlistComponent],
    imports: [CommonModule, AppRoutingModule, AppLayoutModule, SidebarModule],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        CoursesService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
