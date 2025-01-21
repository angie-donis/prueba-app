import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],//Declarar el formulario para poder exportarlo en cualquier lugar
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule
  ],
  exports:[FormComponent]//Exportamos el componente form
})
export class FormModule { }
