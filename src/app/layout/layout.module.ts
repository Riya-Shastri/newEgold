import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { NgProgressModule } from 'ngx-progressbar';
import { ThemeModule } from 'app/themefolders/theme/theme.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgProgressModule,
    ThemeModule
  ]
})
export class LayoutModule { }
