import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint = 'https://api.publicapis.org/entries';
@Injectable({
  providedIn: 'root',
})

export class PostService {
  API_URL: string = "/api/";

  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.http.get(this.API_URL + 'contacts')

//    let valuse = this.http.get(endpoint);
  //  return valuse;
  }
}