import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { MedicalRecordListComponent } from './components/medical-record-list/medical-record-list.component';
import { PacientRegistrationComponent } from './components/pacient-registration/pacient-registration.component';
import { QueryRegistrationComponent } from './components/query-registration/query-registration.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ApplicationScreenComponent } from './pages/application-screen/application-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginScreenComponent, canActivate: [LoginGuardService]},
  {
    path: 'application',
    component: ApplicationScreenComponent,
    canActivate: [AuthGuardService],
    children:[
      {path: 'statistics', component: StatisticsComponent, title: 'Estatísticas'},
      {path: 'pacient-registration', component: PacientRegistrationComponent, title: 'Registro de Paciente'},
      {path: 'query-registration', component: QueryRegistrationComponent, title: 'Registro de Consulta'},
      {path: 'exam-registration', component: ExamRegistrationComponent, title: 'Registro de Exame'},
      {path: 'medical-record-list', component: MedicalRecordListComponent, title: 'Lista de Prontuário Médico'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
