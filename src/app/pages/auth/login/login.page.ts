import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, RouterModule],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      await this.authService.signInWithEmail(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

 
}
