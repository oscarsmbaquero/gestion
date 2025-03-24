import { Component } from '@angular/core';
import { IUser } from '../../models/user-models';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { UsersService } from '../../services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginUser: FormGroup;
  public submitted: boolean = false;
  showPassword: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private userServices: UsersService,
    private router: Router,
    
  ) {
    this.loginUser = this.formBuilder.group({
      user: ['', [Validators.required ]],
      password: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.loginUser.valid) {
      // Creamos un Usuario y lo emitimos
      const user: any = {
        user: this.loginUser.get('user')?.value,
        password: this.loginUser.get('password')?.value,
      };
      this.userServices.login(user).subscribe(
        (response) => {
          this.router.navigate(['facturas']);
        },
        (error) => {
          console.error('Error al enviar los datos', error);
        }
      );
    }
  } 

  /**
   * Método para el ojo del input de password
   * @param field
   */
  togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    }
  }


}
