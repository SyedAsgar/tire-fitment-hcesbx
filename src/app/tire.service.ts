import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TireService {
  constructor(public http: HttpClient) {}

  rootURL = 'https://6080be3273292b0017cdbf2a.mockapi.io';

  getYears(): Observable<any> {
    return this.http.get(this.rootURL + '/years');
  }

  getMake(year:any): Observable<any> {
    console.log(year);
    return this.http.get(this.rootURL + '/makes');
  }

  getModel(maker:any): Observable<any> {
    return this.http.get(this.rootURL + '/models');
  }

  getTrim(model:any): Observable<any> {
    console.log(model);
    return this.http.get(this.rootURL + '/trim');
  }
}
