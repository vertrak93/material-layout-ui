import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formBuilder:FormBuilder = inject(FormBuilder);

  initForm(){
    return this.formBuilder.group({
      user:['', [Validators.required,Validators.maxLength(50)]],
      password:['', [Validators.required,Validators.maxLength(50)]]
    });
  } 

}

