import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { JwtModule } from '@auth0/angular-jwt';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from '../pessoas/pessoa.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { CategoriaService } from '../categorias/categoria.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthService } from '../seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData(locatePt);

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:8080'],
         blacklistedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    DashboardService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
    MessageService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
