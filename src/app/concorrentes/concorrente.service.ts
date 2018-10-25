import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EditalSnifferHttp } from './../seguranca/editalsniffer-http';

@Injectable({
  providedIn: 'root'
})
export class ConcorrenteService {

  concorrentesUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.concorrentesUrl = `${environment.apiUrl}/concorrentes`;
  }

  listarTodos(): Observable<any> {
    return this.http.get(this.concorrentesUrl);
  }
}
