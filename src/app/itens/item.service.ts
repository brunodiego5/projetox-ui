import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import { EditalSnifferHttp } from '../seguranca/editalsniffer-http';
import { environment } from 'src/environments/environment';
import { Item } from '../core/model/Item';

export class ItemFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itensUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.itensUrl = `${environment.apiUrl}/itens`;
  }

  pesquisar(filtro: ItemFiltro): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    return this.http.get<any>(`${this.itensUrl}`, { params });
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.itensUrl}/${id}`);
  }

  mudarStatus(id: number, atende: boolean): Observable<void> {
    const headers = new HttpHeaders(
        {'Content-Type': 'application/json'}
      );

    return this.http.put(`${this.itensUrl}/${id}/atende`, atende, { headers });
  }

  buscarPorId(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.itensUrl}/${id}`);
  }

  atualizarLista(itens: Item[]): Observable<Item[]> {
    return this.http.put<Array<Item>>(`${this.itensUrl}/lista`, itens);
  }
}
