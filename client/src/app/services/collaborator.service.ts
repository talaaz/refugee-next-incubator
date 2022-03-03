import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


const apiUrl = `${environment.apiURL}/sendEmail`;

@NgModule({
  imports: [
    HttpClientModule
   ]
})

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor( private  http: HttpClient) {
   }
  sendCollaboratorEmail(data: any): Observable<any> {
    return this.http.post(apiUrl,data)
  }
}
