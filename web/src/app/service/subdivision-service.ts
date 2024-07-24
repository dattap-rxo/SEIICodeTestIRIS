import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubDivisionService {

  private api: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getSubDivision(): Observable<any> {
    const apiUrl = `${this.api}/v1/subdivisions`
    return this.http.get(apiUrl)
      .pipe((response: any) => {
        return response;
      }, catchError(err => {
        return this.handleError(err);
      })
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}
