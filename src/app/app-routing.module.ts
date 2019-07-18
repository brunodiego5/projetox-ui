import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { importType } from '@angular/compiler/src/output/output_ast';
// import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
// import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
// import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
// import { ItensPesquisaComponent } from './itens/itens-pesquisa/itens-pesquisa.component';

const routes: Routes = [
  /* { path: 'lancamentos', loadChildren: './lancamentos/lancamentos.module#LancamentosModule' },
  { path: 'pessoas', loadChildren: './pessoas/pessoas.module#PessoasModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'relatorios', loadChildren: './relatorios/relatorios.module#RelatoriosModule' }, */
  { path: 'itens', loadChildren: () => import('./itens/itens.module').then(m => m.ItensModule) },
  { path: 'editais', loadChildren: () => import('./editais/editais.module').then(m => m.EditaisModule) },

  /*
  loadChildren: './admin/admin.module#AdminModule'
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
*/

  { path: '', redirectTo: 'editais', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
