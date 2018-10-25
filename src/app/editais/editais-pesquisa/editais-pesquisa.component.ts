import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { EditalFiltro, EditalService } from './../edital.service';


@Component({
  selector: 'app-editais-pesquisa',
  templateUrl: './editais-pesquisa.component.html',
  styleUrls: ['./editais-pesquisa.component.css']
})
export class EditaisPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new EditalFiltro();
  editais = [];
  @ViewChild('tabela') grid;

  constructor(
    private editalService: EditalService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }


  ngOnInit() {
    this.title.setTitle('Pesquisa de editais');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.editalService.pesquisar(this.filtro)
      .subscribe(dados => {
        this.totalRegistros = dados.totalElements;
        this.editais = dados.content;
      },
      erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(edital: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(edital);
      }
    });
  }

  excluir(item: any) {
    this.editalService.excluir(item.id)
      .subscribe(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Edital excluído com sucesso!' });
      },
      erro => this.errorHandler.handle(erro));
  }
}
