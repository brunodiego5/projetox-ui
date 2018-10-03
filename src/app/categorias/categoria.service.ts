import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { EditalSnifferHttp } from '../seguranca/editalsniffer-http';

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriasUrl)
      .toPromise();
  }

}
