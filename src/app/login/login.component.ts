import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  // Importar el servicio de autenticación
import { Router } from '@angular/router';  // Importar el enrutador
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  // Lista de usuarios para simulación
  users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'empleado', password: 'emp123', role: 'empleado' },
    { username: 'distributor', password: 'dist123', role: 'distributor' }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.authService.setRole(user.role);

      if (this.authService.isAdmin() || this.authService.isEmp()) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/offers']);
      }
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

