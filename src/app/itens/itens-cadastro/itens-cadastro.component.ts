import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, startWith, share, catchError } from 'rxjs/operators';

import { MessageService } from 'primeng/components/common/messageservice';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ItemService } from './../item.service';
import { Item } from './../../core/model/Item';

@Component({
  selector: 'app-itens-cadastro',
  templateUrl: './itens-cadastro.component.html',
  styleUrls: ['./itens-cadastro.component.css']
})
export class ItensCadastroComponent implements OnInit {

  formulario: FormGroup;
  ids: number[] = [];
  public clazz: number[] = [];

  public itemEncontrado$:  Observable<Item[]>;
  public itensEncontrado$:  Observable<Item[]>[] = [];
  // public searchString: string;
  // private searchTerms: Subject<string> = new Subject();
  private searchsTerms: Subject<string>[] = [];

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

    this.addItemNoObservable();

    this.inicializarPesquisa(0);
  }

  addItemNoObservable() {
    let item = new Observable<Item[]>();

    const searchTerms: Subject<string> = new Subject();

    item = searchTerms
      .pipe(
        // startWith(this.searchString),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((term) => this.itemService.pesquisarPorDescricao(term)),
        share()
      );

    this.itensEncontrado$.push(item);
    this.searchsTerms.push(searchTerms);
  }

  inicializarPesquisa(itemIndex: number) {
    this.itensEncontrado$[itemIndex] = this.searchsTerms[itemIndex]
    .pipe(
      // startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => this.itemService.pesquisarPorDescricao(term)),
      share()
    );
    /*this.itensEncontrado$.forEach(item => {
        item = this.searchTerms
        .pipe(
          // startWith(this.searchString),
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((term) => this.itemService.pesquisarPorDescricao(term)),
          share()
        );
      });*/
  }

  searchItens(term: string, itemIdex: number): void {
    // this.searchString = term;
    this.searchsTerms[itemIdex].next(term);
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

    this.addItemNoObservable();

    this.router.navigate(['/itens/novo']);
  }

  excluir(itemIndex: number) {
    this.itens.removeAt(itemIndex);

    // this.itensEncontrado$.(itemIndex);
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

  limparPesquisa(itemIndex: number) {
    this.inicializarPesquisa(itemIndex);
  }

  atribuirItemPesquisa(item: Item, itemIndex: number) {
    this.itens.at(itemIndex).patchValue(item);

    this.limparPesquisa(itemIndex);
  }

}
