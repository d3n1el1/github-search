import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetApiOptions} from '../models/api.models';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string, options?: GetApiOptions): Observable<T> {
    return this.httpClient.get<T>(environment.apiUrl + url, options);
  }
}
