import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Item} from './news/Item';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService <T extends Item> {

  private baseUrl: string;

  constructor(private http : HttpClient) {
    this.baseUrl = environment.itemUrl;
  }

  get(url : string) {
    return this.http.get<T> (this.baseUrl + url)
  }
}
