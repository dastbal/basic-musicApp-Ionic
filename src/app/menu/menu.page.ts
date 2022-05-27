import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(
    private menu: MenuController,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  closeMenu() {
    this.menu.close();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
