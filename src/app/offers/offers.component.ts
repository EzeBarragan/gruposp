import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule,ButtonModule, MenuModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
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
}
