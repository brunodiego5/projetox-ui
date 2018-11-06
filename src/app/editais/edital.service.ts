import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { Edital } from './../core/model/Edital';
import { Estado, Cidade } from './../core/model';
import { EditalSnifferHttp } from '../seguranca/editalsniffer-http';

export class EditalFiltro {
  ano: number;
  processo: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EditalService {

  editaisUrl: string;
  cidadesUrl: string;
  estadosUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.editaisUrl = `${environment.apiUrl}/editais`;
    this.estadosUrl = `${environment.apiUrl}/estados`;
    this.cidadesUrl = `${environment.apiUrl}/cidades`;
  }

  urlUploadAnexo(): string {
    return `${this.editaisUrl}/anexo`;
  }

  pesquisar(filtro: EditalFiltro): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.ano) {
      params = params.append('ano', filtro.ano.toString());
    }

    if (filtro.processo) {
      params = params.append('ano', filtro.processo);
    }

    return this.http.get<any>(`${this.editaisUrl}`, { params });
  }

  listarTodas(): Observable<any> {
    return this.http.get<any>(this.editaisUrl);
  }

  excluir(codigo: number): Observable<void> {
    return this.http.delete(`${this.editaisUrl}/${codigo}`);
  }

  adicionar(edital: Edital): Observable<Edital> {
    return this.http.post<Edital>(this.editaisUrl, edital);
  }

  atualizar(edital: Edital): Observable<Edital> {
    return this.http.put<Edital>(`${this.editaisUrl}/${edital.id}`, edital);
  }

  buscarPorId(id: number): Observable<Edital> {
    return this.http.get<Edital>(`${this.editaisUrl}/${id}`);
  }

  listarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.estadosUrl);
  }

  pesquisarCidades(estado): Observable<Cidade[]> {
    const params = new HttpParams()
      .append('estado', estado);

    return this.http.get<Cidade[]>(this.cidadesUrl, { params });
  }

  public converterStringsParaDatas(editais: Edital[]) {
    for (const edital of editais) {
      if (edital.dataAbertura) {
        edital.dataAbertura = moment(edital.dataAbertura,
          'YYYY-MM-DD').toDate();
      }
    }
  }
}
