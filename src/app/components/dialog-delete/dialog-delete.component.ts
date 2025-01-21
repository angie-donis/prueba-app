import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/types';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent {
  @Input() isOpen = false; // Controla si el diálogo está abierto o cerrado
  @Input() company: Company | null = null; // obtener información de la empresa
  @Output() confirm = new EventEmitter<boolean>(); // creamos un evento para devolver información

  onCancel(): void {
    this.confirm.emit(false); // Emite false al cancelar
    this.isOpen = false; // Cierra el diálogo
  }

  onConfirm(): void {
    this.confirm.emit(true); // Emite true al confirmar
    this.isOpen = false; // Cierra el diálogo
  }
}