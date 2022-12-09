import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from '../models/Registro';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public registro: Registro;

  formLogin = this.formBuilder.group({
    emailCampo: ['', Validators.compose([Validators.required, Validators.email])],
    senhaCampo:['', Validators.compose([Validators.required, Validators.minLength(3)])]
  });

  mensagensValidacao={
    emailCampo: [
      {tipo:'required', mensagem:'O campo é obrigatório.'},
      {tipo:'email', mensagem:'Email inválido.'}
    ],
    senhaCampo:[
      {tipo:'required',mensagem:'O campo obrigatório.'},
      {tipo:'minlength',mensagem:'A senha deve conter no mínino 3 caracteres.'}
    ]
  };


  constructor(private formBuilder: FormBuilder, private route: Router) {
  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.registro = new Registro();
  }


  fazerLogin() {
    if (this.formLogin.valid) {
      setTimeout(()=> {
        this.route.navigate(['/cadastro']);
      },1000);
    }else {
      alert('Formulário Invalido');
    }
  }
}
