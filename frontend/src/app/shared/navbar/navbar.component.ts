import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  role: string | null = null;

  constructor(private authService: AuthService) {
    this.role = this.authService.getRole();
  }

  logout(): void {
    this.authService.logout();
  }
}
