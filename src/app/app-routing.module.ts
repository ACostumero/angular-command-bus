import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/users/presentation/users.module').then(m => m.UsersModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/presentation/characters.module').then(m => m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
