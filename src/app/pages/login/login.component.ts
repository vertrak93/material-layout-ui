import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formBuilder:FormBuilder = inject(FormBuilder);
  authSrv:AuthService = inject(AuthService);

  loginForm = this.initForm();
  disabledLogin = false;
  showPassword = false;
  errorLogin = false;

  initForm(){
    return this.formBuilder.group({
      user:['', [Validators.required,Validators.maxLength(50)]],
      password:['', [Validators.required,Validators.maxLength(50)]]
    });
  } 

  submitForm(){
    if(!this.loginForm.invalid){
      
      this.disabledLogin = true;

      setTimeout(() => {
        
        this.disabledLogin = false;
       
        this.authSrv.logIn(this.loginForm.value.user ?? '', this.loginForm.value.password ?? '').then((res) =>{
          if(!res){
            this.errorLogin = true;
          }
        });

      }, 1000);

    }
    else{
      this.loginForm.markAsTouched();
    }
  }

}

