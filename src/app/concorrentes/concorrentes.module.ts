import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConcorrentesRoutingModule } from './concorrentes-routing.module';
import { ConcorrenteCadastroComponent } from './concorrente-cadastro/concorrente-cadastro.component';
import { ConcorrentesPesquisaComponent } from './concorrentes-pesquisa/concorrentes-pesquisa.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DialogModule,

    SharedModule,
    ConcorrentesRoutingModule
  ],
  declarations: [ConcorrenteCadastroComponent, ConcorrentesPesquisaComponent]
})
export class ConcorrentesModule { }
