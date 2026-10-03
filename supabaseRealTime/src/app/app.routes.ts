import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./componentes/register/register').then(m => m.Register)
    },
    {
        path: 'cosas',
        loadComponent: () => import('./componentes/cosas/cosas').then(m => m.Cosas)
    },
    {
        path: 'cosas-realtime',
        loadComponent: () => import('./componentes/cosas-realtime/cosas-realtime').then(m => m.CosasRealtime)
    }
];
