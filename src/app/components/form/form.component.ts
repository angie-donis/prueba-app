import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() action: 'create' | 'edit' = 'create';
  form!: FormGroup;

  constructor(private router: Router) {
    this.setForm();
  }

  setForm(company?: Company) {
    this.form = new FormGroup({
      name: new FormControl(company?.name || '', [Validators.required]),
      phone: new FormControl(company?.phone || '', [Validators.required]),
      nit: new FormControl(company?.nit || '', [Validators.required]),
      status: new FormControl(company?.status || '', [Validators.required]),
      address: new FormControl(company?.address || '', [Validators.required]),
      reason: new FormControl(company?.reason || '', [Validators.required]),
      email: new FormControl(company?.email || '', [Validators.required]),
    });
  }

  get isEdit(): boolean {
    return this.action === 'edit';
  }

  ngOnInit(): void {}

  onClose(): void {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.form.markAllAsTouched();
    console.log(this.form.valid)
    if (!this.form.valid) return;
  }
}