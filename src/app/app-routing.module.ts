import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AsistenciaComponent } from './componentes/asistencia/asistencia.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { RegistroComponent } from './componentes/registro/registro.component';

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
    path: 'asistencia',
    component: AsistenciaComponent
  },
  {
    path: 'notas',
    component: NotasComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
