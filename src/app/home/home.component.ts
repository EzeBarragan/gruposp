import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule, FormsModule, DropdownModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router,public authService: AuthService) { }
  isUserMenuVisible: boolean = false;

  // Método para alternar la visibilidad del menú
  toggleUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }
  // Redirigir a un enlace
  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  // Cerrar sesión
  logout() {
    // Aquí puedes manejar la lógica de cerrar sesión
    console.log('Sesión cerrada');
    this.router.navigate(['/login']);
  }
  userRole = 'admin'; // Suponiendo que tienes esta variable para controlar el rol del usuario

  user = {
    username: '',
    email: '',
    password: '',
    role: null
  };

  roles = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Empleados', value: 'empleado' },
    { label: 'Distributor', value: 'distributor' }
  ];

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Usuario creado:', this.user);
      // Aquí podrías llamar a un servicio para guardar el usuario
    }
  }
}
