import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { PacientRegistrationComponent } from './components/pacient-registration/pacient-registration.component';
import { QueryRegistrationComponent } from './components/query-registration/query-registration.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ApplicationScreenComponent } from './pages/application-screen/application-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';

const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'application',
    component: ApplicationScreenComponent,
    children:[
      {path: 'statistics', component: StatisticsComponent, title: 'Estatísticas'},
      {path: 'pacient-registration', component: PacientRegistrationComponent, title: 'Registro de Paciente'},
      {path: 'query-registration', component: QueryRegistrationComponent, title: 'Registro de Consulta'},
      {path: 'exam-registration', component: ExamRegistrationComponent, title: 'Registro de Exame'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
