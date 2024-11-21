import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dieta',
        loadChildren: () => import('../dieta/dieta.module').then(m => m.DietaPageModule),
      },
      {
        path: 'treino',
        loadChildren: () => import('../treino/treino.module').then(m => m.TreinoPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule),
      },
      {
        path: 'treinocasa',
        loadChildren: () => import('../treinocasa/treinocasa.module').then(m => m.TreinocasaPageModule),
      },
      {
        path: 'exercicios',
        loadChildren: () => import('../exercicios/exercicios.module').then(m => m.ExerciciosPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/dieta',
        pathMatch: 'full',
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
