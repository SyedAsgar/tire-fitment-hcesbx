import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TireService } from '../../app/tire.service';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {
  years$: Array<any>;
  makers$: Array<any>;
  models$: Array<any>;
  trims$: Array<any>;

  selectedYear: any;
  selectedMaker: any;
  selectedModel: any;
  selectedTrim: any;

  // import the store into the constructor
  constructor(public tireService: TireService) {
    this.selectedYear = true;
    this.selectedMaker = true;
    this.selectedModel = true;
    this.selectedTrim = true;
    //console.log(tireService. addTask( 'tireeee'));
  }

  ngOnInit() {
    this.selectedYear = true;
    this.selectedMaker = true;
    this.selectedModel = true;
    this.selectedTrim = true;
  }

  getYears() {
    console.log('getYears');
    this.tireService.getYears().subscribe(result => {
      this.years$ = result['year'];
    });

    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  getMaker(year: any) {
    this.tireService.getMake(year).subscribe(result => {
      this.makers$ = result['make'];
    });
  }
  getModel(maker: any) {
    this.tireService.getModel(maker).subscribe(result => {
      this.models$ = result['model'];
    });
  }
  getTrim(model: any) {
    this.tireService.getTrim(model).subscribe(result => {
      this.trims$ = result['trim'];
      console.log(result['trim']);
    });
  }

  onSelectYear(year: any): void {
    this.selectedYear = year;
    console.log(year);
    this.getMaker(year);
    this.selectedYear = false;
  }
  onSelectMaker(maker: any): void {
    this.selectedMaker = maker;
    console.log(maker);
    this.getModel(maker);
    this.selectedMaker = false;
  }
  onSelectModel(model: any): void {
    this.selectedModel = model;
    console.log(model);
    this.getTrim(model);
    this.selectedModel = false;
  }

  onSelectTrim(trim: any): void {
    this.selectedTrim = trim;
    console.log(trim);
    this.selectedTrim = false;
    this.ngOnInit();
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
