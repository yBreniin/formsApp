import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formCadastro: FormGroup;
  usuario: Usuario;

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {

    this.formCadastro = this.formBuilder.group({
      emailCampo:['', Validators.compose([Validators.required, Validators.email])],
      senhaCampo:['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }


  async salvarCadastro() {
    if(this.formCadastro.valid) {
      this.usuario.email = this.formCadastro.value.nome;
      this.usuario.email = this.formCadastro.value.nome;
      await this.storageService.set(this.usuario.email, this.usuario);
    }else {
      alert('Formulário Invalido');
    }
  }
}
