import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { ModalSignupComponent } from './components/modal-signup/modal-signup.component';
import { ModalForgotPasswordComponent } from './components/modal-forgot-password/modal-forgot-password.component';
import { ApplicationScreenComponent } from './pages/application-screen/application-screen.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    ModalSignupComponent,
    ModalForgotPasswordComponent,
    ApplicationScreenComponent,
    ToolbarComponent,
    AsideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
