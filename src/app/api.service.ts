import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Item} from './news/Item';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService <T extends Item> {

  constructor(private http : HttpClient) {}

  get(url : string) {
    return this.http.get<T> (url)
  }
}
