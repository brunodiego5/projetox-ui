import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { EditalService } from './../edital.service';
import { ConcorrenteService } from './../../concorrentes/concorrente.service';
import { Edital } from './../../core/model/Edital';

@Component({
  selector: 'app-edital-cadastro',
  templateUrl: './edital-cadastro.component.html',
  styleUrls: ['./edital-cadastro.component.css']
})
export class EditalCadastroComponent implements OnInit {

  edital = new Edital();
  estados: any[];
  cidades: any[];
  estadoSelecionado: number;
  concorrentes: any[];

  constructor(
    private editalService: EditalService,
    private concorrenteService: ConcorrenteService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const idEdital = this.route.snapshot.params['id'];

    this.title.setTitle('Novo edital');

    this.carregarEstados();
    this.carregarConcorrentes();

    if (idEdital) {
      this.carregarEdital(idEdital);
    }
  }

  carregarEstados() {
    this.editalService.listarEstados().subscribe(lista => {
      this.estados = lista.map(uf => ({ label: uf.nome, value: uf.codigo }));
    },
    erro => this.errorHandler.handle(erro));
  }

  carregarCidades() {
    this.editalService.pesquisarCidades(this.estadoSelecionado).subscribe(lista => {
      this.cidades = lista.map(c => ({ label: c.nome, value: c.codigo }));
    },
    erro => this.errorHandler.handle(erro));
  }

  carregarConcorrentes() {
    return this.concorrenteService.listarTodos()
      .subscribe(concorrentes => {
        this.concorrentes = concorrentes
          .map(c => ({ label: c.nome, value: c.id }));
      },
      erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.edital.id);
  }

  carregarEdital(id: number) {
    this.editalService.buscarPorId(id)
      .subscribe(edital => {
        this.edital = edital;

        this.editalService.converterStringsParaDatas([this.edital]);

        this.estadoSelecionado = (this.edital.cidade) ?
                this.edital.cidade.estado.codigo : null;

        if (this.estadoSelecionado) {
          this.carregarCidades();
        }

        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarEdital(form);
    } else {
      this.adicionarEdital(form);
    }
  }

  adicionarEdital(form: FormControl) {
    this.editalService.adicionar(this.edital)
      .subscribe(editalAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Edital adicionado com sucesso!' });
        this.router.navigate(['/editais', editalAdicionado.id]);
      },
      erro => this.errorHandler.handle(erro));
  }

  atualizarEdital(form: FormControl) {
    this.editalService.atualizar(this.edital)
      .subscribe(edital => {
        this.edital = edital;

        this.editalService.converterStringsParaDatas([this.edital]);

        this.messageService.add({ severity: 'success', detail: 'Edital alterado com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.edital = new Edital();
    }.bind(this), 1);

    this.router.navigate(['/editais/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de edital: ${this.edital.ano}-${this.edital.processo}-${this.edital.cidade}-${this.edital.cidade.estado}`);
  }

}
