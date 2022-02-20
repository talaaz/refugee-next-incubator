import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://us-central1-ibda-2ff39.cloudfunctions.net/app/puser';

@NgModule({
  imports: [
    HttpClientModule
   ]
})

@Injectable({
  providedIn: 'root'
})
export class PuserService {

  constructor( private  http: HttpClient) {
   }
  addPUser(data: any): Observable<any> {
    return this.http.post(baseUrl,data)
  }
}
