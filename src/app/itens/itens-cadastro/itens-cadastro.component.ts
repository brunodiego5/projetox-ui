import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ItemFiltro, ItemService } from './../item.service';
import { Item } from './../../core/model/Item';

@Component({
  selector: 'app-itens-cadastro',
  templateUrl: './itens-cadastro.component.html',
  styleUrls: ['./itens-cadastro.component.css']
})
export class ItensCadastroComponent implements OnInit {

  formulario: FormGroup;
  ids: number[] = [];

  itensEncontrado: Observable<any[]>;
  private searchTerms = new Subject<string>();

  ultimoKeyPress: number;
  filtro = new ItemFiltro();
  /* startAt = new Subject();
  endAt = new Subject(); */

  constructor(
    private itemService: ItemService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configurarFormulario();
    const idItem = this.route.snapshot.params['id'];

    this.title.setTitle('Cadastro de item');

    if (idItem) {
      this.carregarItem(idItem);
    }

    this.itensEncontrado = this.searchTerms
      .pipe(debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => term ? this.itemService.pesquisar(term) : Observable.of<any[]>([]))),
        catchError(error => {
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      itens: this.formBuilder.array([this.formBuilder.group({
        id: [],
        descricao: [null, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(5) ]],
        atende: [ false, Validators.required ]
      })])
    });
  }


  get itens(): FormArray {
    return this.formulario.get('itens') as FormArray;
  }

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
    };
  }

  carregarItem(id: number) {
    this.ids.push(id);

    this.itemService.buscarPorIds(this.ids)
      .subscribe(item => {
        this.itens.patchValue(item);
      },
      erro => this.errorHandler.handle(erro));
  }

  salvar() {
      this.atualizarItem();
  }

  atualizarItem() {
    this.itemService.atualizarLista(this.formulario.value.itens)
      .subscribe(item => {
        this.itens.patchValue(item);

        this.messageService.add({ severity: 'success', detail: `${this.itens.length > 1  ? 'itens' : 'item'} salvo com sucesso!`});
      },
      erro => this.errorHandler.handle(erro));
  }

  novo(descricao: string = null) {
    setTimeout(function() {
      this.itens.push(this.formBuilder.group({
        id: [],
        descricao: [ descricao, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(5) ]],
        atende: [ false, Validators.required ]
      }));
    }.bind(this), 1);

    this.router.navigate(['/itens/novo']);
  }

  excluir(itemIndex: number) {
    this.itens.removeAt(itemIndex);
  }

  aoColarNaDescricao(event: ClipboardEvent, itemIndex: number) {
    let excluirControl: Boolean = false;

    event.clipboardData
      .getData('Text')
      .split(/\n/)
      .forEach(value => {
        excluirControl = true;
        if (value.trim()) {
            this.novo(value.trim());
        }
      }
      );

      if (excluirControl) {
        this.excluir(itemIndex);
      }
  }

  pesquisarItens(event) {
    if (event.timeStamp - this.ultimoKeyPress > 200) {
      const  q = event.target.value;
      /* this.startAt.next(q);
      this.endAt.next(q + '\uf8ff'); */

      this.filtro.pagina = 0;
      this.filtro.descricao = q;

      console.log(this.filtro.descricao);

      this.itemService.pesquisar(this.filtro)
      .subscribe(dados => {
        /* this.totalRegistros = dados.totalElements; */
        this.itensEncontrado = dados.content;
      },
      erro => this.errorHandler.handle(erro));
    }

    this.ultimoKeyPress = event.timeStamp;

  }
}
