import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'features',
        loadComponent: () => import('./features/features.component').then((m) => m.FeaturesComponent)
    },

    {
        path: 'docs',
        loadComponent: () => import('./docs/docs.component').then((m) => m.DocsComponent)
    },
    {
        path: 'resources',
        loadComponent: () => import('./resources/resources.component').then((m) => m.ResourcesComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./product-single/product-single.component').then(m => m.ProductSingleComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent)
    }
];
