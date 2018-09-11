import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, throttleTime } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

interface AccessData {
  access_token: string;
  refresh_token: string;
  // user_data: UserData;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService2 {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService) {
      this.carregarToken();
     }

  login(usuario: string, senha: string): Observable<any> {
       const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
      });
      const body = `username=${usuario}&password=${senha}&grant_type=password`;

      return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true });
  }

  obterNovoAccessToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
    });

    const body = 'grant_type=refresh_token';
    return this.http.post(this.oauthTokenUrl, body,
      { headers, withCredentials: true });
  }

  /*private fazerRequisicao(): Observable<AccessData> {
    if (this.isAccessTokenInvalido()) {
      console.log('token inválido');

      return this.obterNovoAccessToken()
        .subscribe(res => {
          console.log(res.access_token);
          this.armazenarToken(res.access_token);

          console.log('Novo access token criado!');
        },
        erro => {
          console.error('Erro ao renovar token.', erro);
        }
      );
    }
  }*/

  isAccessTokenInvalido() {
    const token = localStorage.getItem('access_token');

    return !token || this.jwtHelperService.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  public armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('access_token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.armazenarToken(token);
    }
  }

}
