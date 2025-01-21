import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { DialogDeleteModule } from 'src/app/components/dialog-delete/dialog-delete.module';


@NgModule({
  declarations: [
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    DialogDeleteModule
  ]
})
export class CompaniesModule { }
