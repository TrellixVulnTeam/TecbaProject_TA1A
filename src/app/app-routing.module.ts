import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes =
    [
        {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
        },
        {
            path: 'inicio',
            loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
            canActivate: [ValidarTokenGuard],
            canLoad: [ValidarTokenGuard]
        }
    ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
