import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/types';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  openDialogDelete = false;
  selectedCompany: Company | null = null;
  companies: Company[] = [
    {
      id: crypto.randomUUID(),
      status: 'Activo',
      name: 'Carlos Esorche',
      email: 'carlos@email.com',
      nit: 'admin',
      reason: 'MM Comunicaciones Guatemala S.A',
    },
    {
      id: crypto.randomUUID(),
      status: 'Activo',
      name: 'Emilia Santander',
      email: 'emilia@email.com',
      nit: 'admin',
      reason: 'MM Comunicaciones Guatemala S.A',
    },
    {
      id: crypto.randomUUID(),
      status: 'Activo',
      name: 'Camila Alvarez',
      email: 'camila@email.com',
      nit: 'admin',
      reason: 'MM Comunicaciones Guatemala S.A',
    },
    {
      id: crypto.randomUUID(),
      status: 'Activo',
      name: 'Laura Mendoza',
      email: 'laura@email.com',
      nit: 'admin',
      reason: 'MM Comunicaciones Guatemala S.A',
    },
    {
      id: crypto.randomUUID(),
      status: 'Activo',
      name: 'Felix Salas',
      email: 'felix@email.com',
      nit: 'admin',
    },
  ];

  constructor(private router: Router) { }

  onAction(event: Event, company: Company, action: string) {
    event.stopPropagation();
    if (action === 'edit') {
      this.router.navigate([`/editar/${company.id || ''}`]);
    }
    if (action === 'delete') {
      this.openDialogDelete = true;
      this.selectedCompany = company!;
    }
  }

  onDelete() {
    this.openDialogDelete = false;
    this.selectedCompany = null;
  }

  onView(company: Company) {
    this.router.navigate([`/detalle/${company.id}`]);
  }
}