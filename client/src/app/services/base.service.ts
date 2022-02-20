import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

export class BaseService {

  backendBaseUrl: string;
  frontendBaseUrl: string;

  constructor(public http: HttpClient) {
   
  }

}
