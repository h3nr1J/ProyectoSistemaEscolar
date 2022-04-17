import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { HorarioComponent } from './componentes/horario/horario.component';

const routes: Routes = [
  {
    path: '',redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'horario',
    component : HorarioComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
