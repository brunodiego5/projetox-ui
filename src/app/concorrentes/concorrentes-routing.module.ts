import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcorrentesPesquisaComponent } from './concorrentes-pesquisa/concorrentes-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';
import { ConcorrenteCadastroComponent } from './concorrente-cadastro/concorrente-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: ConcorrentesPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_CONCORRENTE'] }
  },
  {
    path: 'novo',
    component: ConcorrenteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CONCORRENTE'] }
  },
  {
    path: ':id',
    component: ConcorrenteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CONCORRENTE'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorrentesRoutingModule { }
