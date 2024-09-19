import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
export class AuthService {
  private role: string = ''

  constructor() {}

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isEmp(): boolean {
    return this.role === 'empleado';
  }

  isDistributor(): boolean {
    return this.role === 'distributor';
  }

}
