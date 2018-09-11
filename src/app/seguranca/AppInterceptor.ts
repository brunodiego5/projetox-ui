import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthService } from './auth.service';
import { catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    if (this.auth.verifyTokenRequest(req.url)) {
      return delegate.handle(req);
    }

    return this.processIntercept(req, delegate);
  }

  /*private fazerRequisicao() {
    if (this.auth.isAccessTokenInvalido()) {
      console.log('token inválido');

      this.auth.obterNovoAccessToken()
        .subscribe(res => {
          console.log(res.access_token);
          this.auth.armazenarToken(res.access_token);

          console.log('Novo access token criado!');
        },
        erro => {
          console.error('Erro ao renovar token.', erro);
        }
      );
    }
  }*/


}
