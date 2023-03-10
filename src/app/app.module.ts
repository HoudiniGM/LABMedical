import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe, KeyValuePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { ModalSignupComponent } from './components/modal-signup/modal-signup.component';
import { ModalForgotPasswordComponent } from './components/modal-forgot-password/modal-forgot-password.component';
import { ApplicationScreenComponent } from './pages/application-screen/application-screen.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PacientRegistrationComponent } from './components/pacient-registration/pacient-registration.component';
import { QueryRegistrationComponent } from './components/query-registration/query-registration.component';
import { ExamRegistrationComponent } from './components/exam-registration/exam-registration.component';
import { MedicalRecordListComponent } from './components/medical-record-list/medical-record-list.component';
import { FilterForStatisticsPipe } from './pipes/filter-for-statistics.pipe';
import { FilterForMedicalRecordPipe } from './pipes/filter-for-medical-record.pipe';
import { PacientDataComponent } from './components/pacient-data/pacient-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    ModalSignupComponent,
    ModalForgotPasswordComponent,
    ApplicationScreenComponent,
    ToolbarComponent,
    AsideMenuComponent,
    StatisticsComponent,
    PacientRegistrationComponent,
    QueryRegistrationComponent,
    ExamRegistrationComponent,
    MedicalRecordListComponent,
    FilterForStatisticsPipe,
    FilterForMedicalRecordPipe,
    PacientDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe, KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
