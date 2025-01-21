import { Component } from '@angular/core';
import { Company } from 'src/app/types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  company: Company | null = {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Felix Salas',
    email: 'felix@email.com',
    nit: 'admin',
  };
}