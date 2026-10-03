import { Component, signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';
import { RouterLink, Router } from '@angular/router';
import { LoginData } from '../../models/login-data';
import { Auth } from '../../servicios/auth';



@Component({
  imports: [FormField, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email is required'});
    email(schemaPath.email, {message: 'Enter a valid email address'});
    required(schemaPath.password, {message: 'Password is required'});
  });

  constructor(private auth: Auth, private router: Router) {}

   async onSubmit(event: Event) {
    event.preventDefault();
    // Perform login logic here
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    const result = await this.auth.signIn(credentials.email, credentials.password);

    if (result.error) {
      console.error('Login failed:', result.error);
      return;
    }
    console.log('Login successful:', result.data);
    this.router.navigate(['/cosas']);
  }

}
