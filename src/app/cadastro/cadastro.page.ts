import { StorageService } from '../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produtos } from '../models/Produtos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  grupo: FormGroup;
  produtos: Produtos = new Produtos();

  // eslint-disable-next-line max-len
  constructor(public storage: StorageService, public router: Router, private storageService: StorageService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.grupo = this.formBuilder.group({
      nomeProduto: [''],
      quantidade: [''],
      preco: [''],
      id: ['']
    });
  }

  async salvar() {
    this.produtos.nomeProduto = this.grupo.value.nomeProduto;
    this.produtos.quantidade = this.grupo.value.quantidade;
    this.produtos.preco = this.grupo.value.preco;
    this.produtos.id = this.grupo.value.id;
    await this.storageService.set(this.produtos.id, this.produtos);
    this.router.navigateByUrl('/tabs/tab1');
  }
}
