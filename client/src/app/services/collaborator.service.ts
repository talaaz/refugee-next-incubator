import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://us-central1-ibda-2ff39.cloudfunctions.net/app/collaborator';

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
  addCollaborator(data: any): Observable<any> {
    return this.http.post(baseUrl,data)
  }
}
