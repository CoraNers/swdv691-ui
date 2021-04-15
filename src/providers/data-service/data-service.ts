import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataServiceProvider {

  // baseURL = "https://192.168.0.21:8080";
  baseURL = "https://cners-capstone-backend.herokuapp.com";

  constructor(public http: HttpClient) {
  }

  doLogin(username, password) {
    console.log('calling doLogin');
    return this.http.get(this.baseURL + '/login?username=' + username + '&password=' + password).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  doSubmitGameplay(gameplayData) {
    console.log('calling doSubmitGameplay');
    return this.http.post(this.baseURL + '/play/completed', gameplayData).subscribe(res => {
      console.log(res);
    })
  }

  doGetHistory(userId) {
    console.log('****** doGetHistory API call with userId: ', userId);
    return this.http.get(this.baseURL + '/history/' + userId).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error && error.name == 'HttpErrorResponse') {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.statusText;
    }
    return throwError(errMsg);
  }

}
