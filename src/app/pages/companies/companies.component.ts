import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { Company } from 'src/app/types';
import * as toast from 'notiflix';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  openDialogDelete = false;
  selectedCompany: Company | null = null;


  constructor(private router: Router, public companiesService: CompaniesService) {
    this.fetch();
  }

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
    this.companiesService.delete(this.selectedCompany?.id!).pipe(catchError(error => {
      toast.Notify.failure('No se pudo eliminar la empresa');
      return error
    })).subscribe((res: any) => {
      this.companiesService.setData(this.companiesService.companies.filter((company) => company.id !== this.selectedCompany?.id));
      this.openDialogDelete = false;
      this.selectedCompany = null;
      toast.Notify.success('Empresa eliminada correctamente');
    })
  }

  onView(company: Company) {
    this.router.navigate([`/detalle/${company.id}`]);
  }
  fetch() {
    if (this.companiesService.companies.length > 0) return;
    this.companiesService.getAll().subscribe((res: any) => {
      this.companiesService.setData(res);
    });
  }
}