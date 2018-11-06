import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { EditaisRoutingModule } from './editais-routing.module';
import { EditalCadastroComponent } from './edital-cadastro/edital-cadastro.component';
import { EditaisPesquisaComponent } from './editais-pesquisa/editais-pesquisa.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    ProgressSpinnerModule,

    SharedModule,
    EditaisRoutingModule
  ],
  declarations: [EditalCadastroComponent, EditaisPesquisaComponent]
})
export class EditaisModule { }
