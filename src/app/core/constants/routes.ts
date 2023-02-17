import { Routes } from '@angular/router';

import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../components/home').then((c) => c.HomeComponent),
        title: 'Mariyan :: Home',
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('../components/projects').then((c) => c.ProjectsComponent),
        title: 'Mariyan :: Projects',
    },
    {
        path: 'contacts',
        loadComponent: () =>
            import('../components/contacts').then((c) => c.ContactsComponent),
        title: 'Mariyan :: Contacts',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Mariyan :: 404',
    },
];
