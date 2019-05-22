import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  BASE_URL = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.BASE_URL);
  }
}
