import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { EditalService } from './../edital.service';
import { ConcorrenteService } from './../../concorrentes/concorrente.service';
import { Edital } from './../../core/model/Edital';
import { Concorrente } from 'src/app/core/model/Concorrente';

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
  uploadEmAndamento = false;
  pt: any;

  constructor(
    private editalService: EditalService,
    private concorrenteService: ConcorrenteService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  antesUploadAnexo(event) {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));

    this.uploadEmAndamento = true;
  }

  aoTerminarUploadAnexo(event) {
    const anexo = JSON.parse(event.xhr.response);

    this.edital.anexo = anexo.nome;
    this.edital.urlAnexo = anexo.url;

    this.uploadEmAndamento = false;
  }

  erroUpload(event) {
    this.messageService.add({ severity: 'error', detail: 'Erro ao tentar enviar anexo!' });

    this.uploadEmAndamento = false;
  }

  removerAnexo() {
    this.edital.anexo = null;
    this.edital.urlAnexo = null;
  }

  get nomeAnexo() {
    const nome = this.edital.anexo;

    if (nome) {
      return nome.substring(nome.indexOf('_') + 1, nome.length);
    }

    return '';
  }

  get urlUploadAnexo() {
    return this.editalService.urlUploadAnexo();
  }

  ngOnInit() {
    const idEdital = this.route.snapshot.params['id'];

    this.title.setTitle('Novo edital');

    this.carregarEstados();
    this.carregarConcorrentes();

    if (idEdital) {
      this.carregarEdital(idEdital);
    }

    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
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

        /* Quando o objeto pode vim nulo, vc deve instancia-lo */
        if (!edital.concorrente) {
          edital.concorrente = new Concorrente();
        }

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

  // salvar(form: FormControl) {
    salvar(form) {  
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

        /* Quando o objeto pode vim nulo, vc deve instancia-lo */
        if (!edital.concorrente) {
          edital.concorrente = new Concorrente();
        }

        this.edital = edital;

        this.editalService.converterStringsParaDatas([this.edital]);

        this.messageService.add({ severity: 'success', detail: 'Edital alterado com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  //novo(form: FormControl) {
  novo(form) {
    form.reset();

    setTimeout(function() {
      this.edital = new Edital();
    }.bind(this), 1);

    this.router.navigate(['/editais/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de edital: ${this.edital.ano}/${this.edital.processo} - ${this.edital.cidade.nome}`);
  }

}
