import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDeleteComponent } from './dialog-delete.component';



@NgModule({
  declarations: [DialogDeleteComponent],
  imports: [
    CommonModule
  ],
  exports:[DialogDeleteComponent]
})
export class DialogDeleteModule { }
