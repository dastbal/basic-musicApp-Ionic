import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(
    private menu: MenuController,
    private router: Router,
    private authService: AuthService
  ) {}

  closeMenu() {
    this.menu.close();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToSetting() {
    this.router.navigate(['/menu/settings']);
    this.menu.close();
  }
}
