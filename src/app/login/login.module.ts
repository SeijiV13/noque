import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginRoutingModule } from '~/app/login/login-routing.module';
import { LoginComponent } from '~/app/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    NativeScriptCommonModule,
    LoginRoutingModule,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
