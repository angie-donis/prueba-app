import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { Company } from 'src/app/types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  company: Company | null = null;
constructor(private companiesService: CompaniesService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(({params}: any) => {
      this.companiesService.getOne(params.id).subscribe((res) => {
        this.company = res;
      })
    });
  }
}