import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  itens: Item[] = [];

  constructor(
    private itemService: ItemService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const idItem = this.route.snapshot.params['id'];

    this.title.setTitle('Novo item');

    if (idItem) {
      this.carregarItem(idItem);
    } else {
      this.itens.push(new Item());
    }
  }

  get editando() {
    // return Boolean(this.item.id);
    return Boolean(this.itens[0].id);
  }

  carregarItem(id: number) {
    this.itemService.buscarPorId(id)
      .subscribe(item => {
        // this.item = item;
        this.itens[0] = item;
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
    this.itemService.adicionarLista(this.itens)
      .subscribe(itemAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Item adicionado com sucesso!' });

        // this.router.navigate(['/itens', itemAdicionada.id]);
        this.itens = itemAdicionada;

      },
      erro => this.errorHandler.handle(erro));
  }

  atualizarItem(form: FormControl) {
    // this.itemService.atualizar(this.item)
    this.itemService.atualizarLista(this.itens)
      .subscribe(item => {

        this.itens = item;

        this.messageService.add({ severity: 'success', detail: 'Item alterada com sucesso!' });
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
    // form.reset();

    setTimeout(function() {
      // this.item = new Item();
      this.itens.push(new Item());
    }.bind(this), 1);

    this.router.navigate(['/itens/novo']);
  }

  atualizarTituloEdicao() {
    // this.title.setTitle(`Edição de item: ${this.item.descricao}`);
    this.title.setTitle(`Edição de item: ${this.itens[0].descricao}`);
  }


}
