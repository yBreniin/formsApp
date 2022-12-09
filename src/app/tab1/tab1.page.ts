import { Component } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaProdutos: Produtos[] = [];

  constructor(private storageService: StorageService) {}

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

  async excluirCadastro(id: string){
    await this.storageService.remove(id);
    this.buscarProdutos();
    }
}
