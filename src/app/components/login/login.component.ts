import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        //console.log(data);
        localStorage.setItem('token', data.access_token);
        this.toastr.success('Bienvenue :)');
        this.router.navigate(['cv']);
      },
      () => {
        this.toastr.error('Veuillez vérifier vos credentials.');
      }
    );
  }


}
