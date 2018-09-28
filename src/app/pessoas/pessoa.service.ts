import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pessoa } from '../core/model';
import { environment } from '../../environments/environment.prod';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5; // 3;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl: string;

  constructor(private http: HttpClient) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
   }

  pesquisar(filtro: PessoaFiltro): Observable<any> {
    let params = new HttpParams();
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`,
      { /*headers,*/ params });
  }

  listarTodas(): Observable<any> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(`${this.pessoasUrl}`/*, { headers }*/);
  }

  excluir(codigo: number): Observable<any> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.delete(`${this.pessoasUrl}/${codigo}`/*, { headers }*/);
  }

  mudarStatus(codigo: number, ativo: boolean): Observable<any> {
    /*const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==',
      'Content-Type': 'application/json'}
      );*/

    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo/*, { headers }*/);
  }

  adicionar(pessoa: Pessoa): Observable<Pessoa> {
    /*const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==',
      'Content-Type': 'application/json'}
      );*/

      return this.http.post(this.pessoasUrl, JSON.stringify(pessoa)/*, { headers }*/)
          .pipe(
            map(res => {
              return res as Pessoa;
            })
          );

  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    /*const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==',
      'Content-Type': 'application/json'}
      );*/

    return this.http.put(`${this.pessoasUrl}/${pessoa.codigo}`,
      JSON.stringify(pessoa)/*, { headers }*/).
        pipe(
        map(response => {
          return response as Pessoa;
        }));

  }

  buscarPorCodigo(codigo: number): Observable<Pessoa> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(`${this.pessoasUrl}/${codigo}`/*, { headers }*/)
      .pipe(
        map(response => {
          return response as Pessoa;
      }));
  }


}
