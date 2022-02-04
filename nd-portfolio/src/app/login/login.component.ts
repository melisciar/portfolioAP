import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';

  constructor(private authService: AuthService) { }

  Login(){
    // El servicio authService.login ya redirecciona
    // en caso de inicio de sesión positivo
    this.authService.login(this.email, this.password);
  }

  ngOnInit(): void {
  }

}
