import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { EditalSnifferHttp } from '../seguranca/editalsniffer-http';

import { Categoria } from './../core/model';

export class CategoriaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: EditalSnifferHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  pesquisar(filtro: CategoriaFiltro): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('ano', filtro.nome);
    }

    return this.http.get<any>(`${this.categoriasUrl}`, { params });
  }

  listarTodas(): Observable<any> {
    return this.http.get<any>(`${this.categoriasUrl}/lista`);
  }

  excluir(codigo: number): Observable<void> {
    return this.http.delete(`${this.categoriasUrl}/${codigo}`);
  }

  adicionar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, categoria);
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.categoriasUrl}/${categoria.codigo}`, categoria);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.categoriasUrl}/${id}`);
  }

}
