import { Registro } from 'src/app/models/Registro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  registro: Registro = new Registro();

    mensagensValidacao={
      email: [
        {tipo:'required', mensagem:'O campo é obrigatório.'},
        {tipo:'email', mensagem:'Email inválido.'}
      ],
      senha:[
        {tipo:'required',mensagem:'Campo obrigatório.'},
        {tipo:'minlength',mensagem:'O campo deve conter no mínino 3 caracteres.'}
      ],
      nome:[
        {tipo:'required', mensagem:'Campo obrigatório.'},
        {tipo:'minlength', mensagem:'O campo deve conter no mínimo 3 caracteres.'}
      ],
      cpf:[
        {tipo:'required', mensagem:'O campo é obrigatório.'},
        {tipo:'minlength', mensagem:'O campo deve conter no mínimo 11 caracteres.'},
        {tipo: 'maxlength', mensagem:'O campo deve conter no máximo 11 caracteres.'}
      ],
      confirmaSenha:[
        {tipo:'required', mensagem:'O campo é obrigatório.'},
      {tipo:'minlength', mensagem:'O campo deve conter no mínimo 3 caracteres.'}
      ]
    };
    constructor(private formBuilder: FormBuilder, private storageService: StorageService, private router: Router) {
      this.formRegistro = this.formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        senha:['', Validators.compose([Validators.required, Validators.minLength(3)])],
        email:['', Validators.compose([Validators.required, Validators.email])],
        cpf:['', Validators.compose([Validators.required,Validators.maxLength(11),Validators.minLength(11)])],
        confirmaSenha:['',Validators.compose([Validators.required, Validators.minLength(3)])]
      });
     }

    ngOnInit() {
    }

    async salvarRegistro(){
      if(this.formRegistro.valid){
        this.registro.nome = this.formRegistro.value.nome;
        this.registro.email = this.formRegistro.value.email;
        this.registro.cpf = this.formRegistro.value.cpf;
        this.registro.senha = this.formRegistro.value.senha;
        await this.storageService.set(this.registro.email, this.registro);
        this.router.navigate(['/tabs/tab3']);
      }else{
        alert('Formulário Inválido');
      }
    }
}
