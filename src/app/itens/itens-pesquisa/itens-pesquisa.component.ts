import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ItemFiltro, ItemService } from './../item.service';

@Component({
  selector: 'app-itens-pesquisa',
  templateUrl: './itens-pesquisa.component.html',
  styleUrls: ['./itens-pesquisa.component.css']
})
export class ItensPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ItemFiltro();
  itens = [];
  @ViewChild('tabela', {static: false}) grid;

  constructor(
    private itemService: ItemService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de itens');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.itemService.pesquisar(this.filtro)
      .subscribe(dados => {
        this.totalRegistros = dados.totalElements;
        this.itens = dados.content;
      },
      erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(item: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(item);
      }
    });
  }

  excluir(item: any) {
    this.itemService.excluir(item.id)
      .subscribe(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Item excluído com sucesso!' });
      },
      erro => this.errorHandler.handle(erro));
  }

  alternarStatus(item: any): void {
    const novoStatus = !item.atende;

    this.itemService.mudarStatus(item.id, novoStatus)
      .subscribe(() => {
        const acao = novoStatus ? 'atende' : 'não atende';

        item.atende = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Item alterado para '${acao}'.` });
      },
      erro => this.errorHandler.handle(erro));
  }
}
