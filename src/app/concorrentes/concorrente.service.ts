import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EditalSnifferHttp } from './../seguranca/editalsniffer-http';
import { HttpParams } from '@angular/common/http';
import { Concorrente } from '../core/model/Concorrente';

export class ConcorrenteFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ConcorrenteService {

  concorrentesUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.concorrentesUrl = `${environment.apiUrl}/concorrentes`;
  }

  pesquisar(filtro: ConcorrenteFiltro): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.concorrentesUrl}`, { params });
  }

  listarTodos(): Observable<any> {
    return this.http.get(`${this.concorrentesUrl}/lista`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.concorrentesUrl}/${id}`);
  }

  adicionar(concorrente: Concorrente): Observable<Concorrente> {
    return this.http.post<Concorrente>(this.concorrentesUrl, concorrente);
  }

  atualizar(concorrente: Concorrente): Observable<Concorrente> {
    return this.http.put<Concorrente>(`${this.concorrentesUrl}/${concorrente.id}`, concorrente);
  }

  buscarPorId(id: number): Observable<Concorrente> {
    return this.http.get<Concorrente>(`${this.concorrentesUrl}/${id}`);
  }
}
