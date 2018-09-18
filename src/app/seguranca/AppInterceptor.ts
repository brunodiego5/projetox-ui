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

    /*return next.handle(req).pipe(
      catchError((err) => {
        const errorResponse = err as HttpErrorResponse;
        console.log(errorResponse.error.error);
        if (errorResponse.status === 401 && errorResponse.error.error === 'invalid_token') {
          this.fazerRequisicao();
        }
        return throwError(err);
      })
    );
*/
    return next.handle(req);
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
