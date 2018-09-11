import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  login(usuario: string, senha: string) {
      this.auth.login(usuario, senha)
        .subscribe(res => {
          this.auth.armazenarToken(res.access_token);
          this.router.navigate(['/lancamentos']);
        },
         erro => {
           if (erro.status === 400) {
             const responseJson = erro.error;

             if (responseJson.error === 'invalid_grant') {
               this.errorHandler.handle('Usuário ou senha inválida');
             }
           } else {
            this.errorHandler.handle(erro);
           }
         }
      );
  }

}
