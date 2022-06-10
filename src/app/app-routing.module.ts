import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search-page/search-page.module').then(m => m.SearchPageModule)
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
