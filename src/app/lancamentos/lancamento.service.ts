import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { Lancamento } from '../core/model';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5; // 3;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Observable<any> {
    let params = new HttpParams();
    // const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    /*httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    /*return this.http.get(`${this.lancamentosUrl}?resumo`, { headers})
      .pipe(
        map((res) => res)
      );*/

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`,
      { /*headers,*/  params });
          /*mapTo(marvelResponse => marvelResponse.data.results
          )*/
          /*mapTo(response => {
            console.log(response);
            const responseJson = response.json();
            const lancamentos = responseJson;*/
            /*const resultado = {
              lancamentos,
              total: responseJson.totalElements
            };
            return resultado;*/
          /*}*/
        /*);*/
  }

  excluir(codigo: number): Observable<any> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.delete(`${this.lancamentosUrl}/${codigo}`/*, { headers }*/);
  }

  adicionar(lancamento: Lancamento): Observable<Lancamento> {
    /*const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==',
      'Content-Type': 'application/json'}
      );*/

      return this.http.post(this.lancamentosUrl, JSON.stringify(lancamento)/*, { headers }*/)
        .pipe(
          map(res => {
            return res as Lancamento;
          })
        );

  }

  atualizar(lancamento: Lancamento): Observable<Lancamento> {
    /*const headers = new HttpHeaders(
      {'Authorization': 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==',
      'Content-Type': 'application/json'}
      );*/

    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`,
      JSON.stringify(lancamento)/*, { headers }*/).
        pipe(
        map(response => {
          const lancamentoAlterado = response as Lancamento;
          this.converterStringsParaDatas([lancamentoAlterado]);
          return lancamentoAlterado;
        }));

  }

  buscarPorCodigo(codigo: number): Observable<Lancamento> {
    /*const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(`${this.lancamentosUrl}/${codigo}`/*, { headers }*/)
      .pipe(
        map(response => {
          const lancamento = response as Lancamento;

          this.converterStringsParaDatas([lancamento]);

          return lancamento;
      }));
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }
}
