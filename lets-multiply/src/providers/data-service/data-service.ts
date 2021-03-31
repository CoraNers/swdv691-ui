import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataServiceProvider {

  // onTheMenuItems: any = [];
  // dataChanged$: Observable<boolean>;
  // private dataChangeSubject: Subject<boolean>;
  // // baseURL = "http://localhost:8080";
  // TODO adjust base url for IP address for local testing
  baseURL = "http://192.168.0.24:8080";

  constructor(public http: HttpClient) {
    // this.dataChangeSubject = new Subject<boolean>();
    // this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  doLogin(username, password) {
    console.log('inside doLogin');
    let baseURL = this.baseURL + "/login?username=" + username + "&password=" + password;
    console.log(baseURL);
    this.http.get(this.baseURL + '/login?username=' + username + '&password=' + password).subscribe(res => {
      let loginResponse = res;
      console.log(loginResponse);
    });
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
