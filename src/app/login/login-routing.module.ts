import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from '~/app/login/login.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  { path: "", component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginRoutingModule { }
