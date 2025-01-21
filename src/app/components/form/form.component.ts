import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { Company } from 'src/app/types';
import * as toast from 'notiflix';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() action: 'create' | 'edit' = 'create';
  form!: FormGroup;
  loading: boolean = false;
  company: Company | null = null;

  constructor(private router: Router, private companiesService: CompaniesService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      nit: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  setForm(company?: Company) {
    this.form.patchValue(company!);
  }

  get isEdit(): boolean {
    return this.action === 'edit';
  }

  ngOnInit(): void {
    if (!this.isEdit) {
      this.setForm();
    } else {
      this.getCompany();
    }
  }

  onClose(): void {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;
    this.loading = true;
    if (!this.isEdit) {
      this.companiesService.create(this.form.value).pipe(catchError(error => {
        this.loading = false;
        toast.Notify.failure('Error al crear la empresa');
        return error
      }))
        .subscribe((res: any) => {
          this.companiesService.setData([...this.companiesService.companies, res]);
          this.loading = false;
          toast.Notify.success('Empresa creada con éxito');
          this.goHome();
        })

    } else {
      this.companiesService.update({...this.form.value, email: this.company?.email }).pipe(catchError(error => {
        this.loading = false;
        toast.Notify.failure('Error al actualizar la empresa');
        return error
      }))
        .subscribe((res: any) => {
          this.companiesService.setData(this.companiesService.companies.map((company: Company) => {
            if (company.id === res.id) {
              return res;
            }
            return company;
          }));
          this.loading = false;
          toast.Notify.success('Empresa actualizada con éxito');
          this.goHome();
        })
    }
  }
  goHome() {
    this.router.navigate(['/']);
  }

  getCompany() {
    this.route.paramMap.subscribe(({ params }: any) => {

      this.companiesService.getOne(params.id).subscribe((res: any) => {
        this.company = res;
        this.setForm(res);
        this.form.get('email')?.disable();
      });
    })
  }
}