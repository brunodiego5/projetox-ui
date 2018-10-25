import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { EditaisPesquisaComponent } from './editais-pesquisa/editais-pesquisa.component';
import { EditalCadastroComponent } from './edital-cadastro/edital-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: EditaisPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_EDITAL'] }
  },
  {
    path: 'novo',
    component: EditalCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_EDITAL'] }
  },
  {
    path: ':id',
    component: EditalCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_EDITAL'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class EditaisRoutingModule { }
