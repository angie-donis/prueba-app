import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'crear',
  //   loadChildren: () =>
  //     import('./pages/create/create.module').then((m) => m.CreateModule),
  // },
  {
    path: 'editar/:id',
    loadChildren: () =>
      import('./pages/edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: 'detalle/:id',
    loadChildren: () =>
      import('./pages/view/view.module').then((m) => m.),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }, // Manejo de rutas no encontradas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
