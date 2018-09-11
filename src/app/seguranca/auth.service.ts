import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, throttleTime, switchMap, do, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorage } from './token-storage.service';

interface AccessData {
  access_token: string;
  refresh_token: string;
  // user_data: UserData;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,
    private tokenStorage: TokenStorage) {
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

  public refreshToken(): Observable < AccessData > {
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
      switchMap((refreshToken: string) => {
        return this.obterNovoAccessToken;
      })),
      tap(this.saveAccessData.bind(this))
      .catch((err) => {
        this.logout();

        return Observable.throw(err);
      });
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
  */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  /*doRefreshToken(refreshToken: string) : Observable<any> {
    var tokenUrl = `${Config.authServerUrl}token` +
      `?grant_type=refresh_token` +
      `&refresh_token=${refreshToken}` +
      `&scope=read write`;

    let headers = new HttpHeaders()
        .append("Authorization", "Basic " + btoa(`${Config.client_id}:${Config.client_secret}`));

    return this.http.post(tokenUrl, null, {headers: headers});
  }*/


}
