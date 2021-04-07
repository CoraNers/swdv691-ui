import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataServiceProvider {

  // baseURL = "http://localhost:8080";
  baseURL = "http://192.168.0.24:8080";

  constructor(public http: HttpClient) {
  }

  doLogin(username, password) {
    return this.http.get(this.baseURL + '/login?username=' + username + '&password=' + password).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  doSubmitGameplay(gameplayData) {
    return this.http.post(this.baseURL + '/play/completed', gameplayData).subscribe(res => {
      // TODO 
      // this.putItems = res;
      // this.dataChangeSubject.next(true);
    })
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
