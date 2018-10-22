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
    return Boolean(this.formulario.value.itens[0].id);
  }

  carregarItem(id: number) {
    this.itemService.buscarPorId(id)
      .subscribe(item => {
        // this.item = item;
        // this.itens[0] = item;

        this.itens.patchValue(item);

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

    // this.item = this.formulario.value;

    console.log('adicionar');
    this.itemService.adicionarLista(this.formulario.value.itens)
      .subscribe(itemAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Item adicionado com sucesso!' });
        this.itens.patchValue(itemAdicionada);
        // this.router.navigate(['/itens', itemAdicionada.id]);
      },
      erro => this.errorHandler.handle(erro));
  }

  atualizarItem(form: FormControl) {
    // this.itemService.atualizar(this.item)
    // this.itemService.atualizarLista(this.itens)
    console.log('atualizar');
    this.itemService.atualizarLista(this.formulario.value.itens)
      .subscribe(item => {

        // this.itens = item;
        this.itens.patchValue(item);

        this.messageService.add({ severity: 'success', detail: 'Item alterada com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  novo() {
    // form.reset();
    // this.formulario.reset(); // teste

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
    this.title.setTitle(`Edição de item: ${this.formulario.value.itens[0].descricao}`);
  }


}
