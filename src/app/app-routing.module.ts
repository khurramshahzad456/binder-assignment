import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './demo/components/login/login.component';
import { AuthGuard } from './demo/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                    ],
                    canActivate: [AuthGuard],
                },
                {
                    path: 'auth/login',
                    component: LoginComponent,
                },

                { path: '**', redirectTo: '/' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
