import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItensPesquisaComponent } from './itens-pesquisa/itens-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ItensPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_ITEM'] }
  },
  {
    path: 'novo',
    component: ItensCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ITEM'] }
  },
  {
    path: ':id',
    component: ItensCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ITEM'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItensRoutingModule { }
