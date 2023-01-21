import { Routes } from '@angular/router';

import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../components/home/home.component').then(
                (c) => c.HomeComponent
            ),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('../components/projects/projects.component').then(
                (c) => c.ProjectsComponent
            ),
    },
    { path: '**', component: PageNotFoundComponent },
];
