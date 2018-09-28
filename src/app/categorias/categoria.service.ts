import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoruasUrl: string;

  constructor(private http: HttpClient) {
    this.categoruasUrl = `${environment.apiUrl}/categorias`;
   }

  listarTodas(): Observable<any> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(`${this.categoruasUrl}`/*, { headers }*/);
  }
}
