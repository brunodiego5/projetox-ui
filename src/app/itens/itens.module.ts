import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ItensRoutingModule } from './itens-routing.module';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ItensPesquisaComponent } from './itens-pesquisa/itens-pesquisa.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    CheckboxModule,
    InputTextareaModule,

    SharedModule,
    ItensRoutingModule
  ],
  declarations: [
    ItensCadastroComponent,
    ItensPesquisaComponent
  ]
})
export class ItensModule { }
