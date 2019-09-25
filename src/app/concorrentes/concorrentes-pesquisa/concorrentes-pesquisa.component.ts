import { Component, OnInit, ViewChild } from '@angular/core';
import { ConcorrenteFiltro, ConcorrenteService } from '../concorrente.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-concorrentes-pesquisa',
  templateUrl: './concorrentes-pesquisa.component.html',
  styleUrls: ['./concorrentes-pesquisa.component.css']
})
export class ConcorrentesPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ConcorrenteFiltro();
  concorrentes = [];
  @ViewChild('tabela', {static: false}) grid;

  constructor(
    private concorrenteService: ConcorrenteService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }


  ngOnInit() {
    this.title.setTitle('Pesquisa de concorrentes');
  }

  pesquisar(pagina = 0, setarPrimeiraPagna: boolean = true) {
    this.filtro.pagina = pagina;

    this.concorrenteService.pesquisar(this.filtro)
      .subscribe(dados => {
        this.totalRegistros = dados.totalElements;
        this.concorrentes = dados.content;
        if (setarPrimeiraPagna) {
          this.grid.first = 0;
        }
      },
      erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina, false);
  }

  confirmarExclusao(concorrente: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(concorrente);
      }
    });
  }

  excluir(concorrente: any) {
    this.concorrenteService.excluir(concorrente.id)
      .subscribe(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Concorrente excluído com sucesso!' });
      },
      erro => this.errorHandler.handle(erro));
  }
}