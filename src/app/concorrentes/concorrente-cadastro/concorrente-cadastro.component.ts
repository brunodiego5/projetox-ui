import { Component, OnInit } from '@angular/core';
import { Concorrente } from './../../core/model/Concorrente';
import { ConcorrenteService } from '../concorrente.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-concorrente-cadastro',
  templateUrl: './concorrente-cadastro.component.html',
  styleUrls: ['./concorrente-cadastro.component.css']
})
export class ConcorrenteCadastroComponent implements OnInit {

  concorrente = new Concorrente();

  constructor(
    private concorrenteService: ConcorrenteService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const idConcorrente = this.route.snapshot.params['id'];

    this.title.setTitle('Nova concorrente');

    if (idConcorrente) {
      this.carregarConcorrente(idConcorrente);
    }

  }

  get editando() {
    return Boolean(this.concorrente.id);
  }

  carregarConcorrente(id: number) {
    this.concorrenteService.buscarPorId(id)
      .subscribe(concorrente => {
        this.concorrente = concorrente;

        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  salvar(form) {
    if (this.editando) {
      this.atualizarConcorrente(form);
    } else {
      this.adicionarConcorrente(form);
    }
  }

  adicionarConcorrente(form: FormControl) {
    this.concorrenteService.adicionar(this.concorrente)
      .subscribe(concorrenteAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Concorrente adicionado com sucesso!' });
        this.router.navigate(['/concorrentes', concorrenteAdicionado.id]);
      },
      erro => this.errorHandler.handle(erro));
  }

  atualizarConcorrente(form: FormControl) {
    this.concorrenteService.atualizar(this.concorrente)
      .subscribe(concorrente => {
        this.concorrente = concorrente;

        this.messageService.add({ severity: 'success', detail: 'Concorrente alterado com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  novo(form) {
    form.reset();

    setTimeout(function() {
      this.concorrente = new Concorrente();
    }.bind(this), 1);

    this.router.navigate(['/concorrentes/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de concorrente: ${this.concorrente.nome}`);
  }

}
