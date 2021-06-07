import { default as dataJson } from "@views/data/json.json";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { ErrorService } from "@views/service/error.service";




@Injectable()
export class SERVER_DATA {

  constructor(
      private http: HttpClient,
      private errorService: ErrorService
    ){}
  public subscriptions$: Subscription = new Subscription();
  public data = dataJson

  public _get<T = unknown>(
    url: string,
    apiFragment: string = '',
    params?: HttpParams
): Observable<T> {

    return this.http
        .get<T>(`/${url}${apiFragment}`, {params})
        .pipe(catchError(this.errorService.handleError));
}

  private url: string = "data"
  private apiFragment: string = ""

  private readData<T = unknown>(url: string, fragment: string): Observable<T> {
    return this._get(url, fragment)
  }

  public fetchData(): Subscription {
      return this.readData(this.url, this.apiFragment)
          .pipe()
          .subscribe(response => (console.log(response)));
  }


  public _post(

){

  this.http.delete(`/${this.url}/1`)

}




}




