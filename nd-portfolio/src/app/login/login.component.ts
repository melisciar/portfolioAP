import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    //Creamos el grupo de controladores para el formulario de login
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  Login() {
    // El servicio authService.login ya redirecciona
    // en caso de inicio de sesión positivo
    this.authService.login(this.email, this.password);
  }

  onEnviar(event: Event) {
    //Prevenimos el comportamiento por defecto del formulario
    event.preventDefault();

    if (this.form.valid) {
      this.Login();
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {}
}
