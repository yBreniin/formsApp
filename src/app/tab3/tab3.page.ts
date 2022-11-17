import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formLogin = this.formBuilder.group({
    emailCampo:['', Validators.compose([Validators.required, Validators.email])],
    senhaCampo:['', Validators.compose([Validators.required, Validators.minLength(8)])]
  });
  constructor(private formBuilder: FormBuilder) {}

}
