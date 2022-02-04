import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api/'; //La Url que corresponda en cada caso
  token = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    this.http.post(`${this.uri}/authenticate`, {email: email, password: password}).subscribe((resp: any) => {
      //Redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //Guardamos el token en el localStorage
      localStorage.setItem('token', resp.token);
    })
  }

  //Para cerrar sesión eliminamos el token del localStorage
  logout(){
    localStorage.removeItem('token');
  }

  //Para saber si el usuario está logueado
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
