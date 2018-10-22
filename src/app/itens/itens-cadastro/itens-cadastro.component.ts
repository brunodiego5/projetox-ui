import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

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

  // item = new Item();
  // itens: Item[] = [];
  formulario: FormGroup;

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
    console.log(this.formulario);
    const idItem = this.route.snapshot.params['id'];

    this.title.setTitle('Novo item');

    if (idItem) {
      this.carregarItem(idItem);
    }
    // else {
    //  this.itens.push(new Item());
    // }
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

  get editando() {
    // return Boolean(this.item.id);
    // return Boolean(this.itens[0].id);
    // var array = itens();
    return Boolean(this.itens.at(0));
  }

  carregarItem(id: number) {
    this.itemService.buscarPorId(id)
      .subscribe(item => {
        // this.item = item;
        // this.itens[0] = item;

        this.formulario.patchValue(item);

        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarItem(form);
    } else {
      this.adicionarItem(form);
    }
  }

  adicionarItem(form: FormControl) {
    // this.itemService.adicionar(this.item)
    // this.itemService.adicionarLista(this.itens)
    this.itemService.adicionarLista(this.formulario.value)
      .subscribe(itemAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Item adicionado com sucesso!' });

        // this.router.navigate(['/itens', itemAdicionada.id]);
        // this.itens = itemAdicionada;
        // this.formulario

      },
      erro => this.errorHandler.handle(erro));
  }

  atualizarItem(form: FormControl) {
    // this.itemService.atualizar(this.item)
    // this.itemService.atualizarLista(this.itens)
    this.itemService.atualizarLista(this.formulario.value)
      .subscribe(item => {

        // this.itens = item;
        this.formulario.patchValue(item);

        this.messageService.add({ severity: 'success', detail: 'Item alterada com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  novo() {
    // form.reset();
    this.formulario.reset(); // teste

    setTimeout(function() {
      // this.item = new Item();
      // this.itens.push(new Item());
      // let item = this.formBuilder.group(new itens());
      this.itens.push(this.formBuilder.group({
        id: [],
        descricao: [null, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(5) ]],
        atende: [ false, Validators.required ]
      }));
    }.bind(this), 1);

    this.router.navigate(['/itens/novo']);
  }

  atualizarTituloEdicao() {
    // this.title.setTitle(`Edição de item: ${this.item.descricao}`);
    this.title.setTitle(`Edição de item: ${this.itens[0].descricao}`);
  }


}
