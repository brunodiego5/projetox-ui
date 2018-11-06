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
  ids: number[] = [];

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

  salvar(form: FormControl) {
      this.atualizarItem(form);
  }

  atualizarItem(form: FormControl) {
    this.itemService.atualizarLista(this.formulario.value.itens)
      .subscribe(item => {
        this.itens.patchValue(item);

        this.messageService.add({ severity: 'success', detail: `${this.itens.length > 1  ? 'itens' : 'item'} salvo com sucesso!`});
      },
      erro => this.errorHandler.handle(erro));
  }

  novo() {
    setTimeout(function() {
      this.itens.push(this.formBuilder.group({
        id: [],
        descricao: [null, [ this.validarObrigatoriedade, this.validarTamanhoMinimo(5) ]],
        atende: [ false, Validators.required ]
      }));
    }.bind(this), 1);

    this.router.navigate(['/itens/novo']);
  }

  excluir(itemIndex: number) {
    this.itens.removeAt(itemIndex);
  }
}
