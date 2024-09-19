// app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component'; // Importa el nuevo componente
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'offers', component: OffersComponent }, // Nueva ruta para el componente de ofertas
  { path: '**', redirectTo: 'login' }
];

