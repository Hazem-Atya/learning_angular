import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService:AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onNavigate() {
    const d= 2021;
    this.router.navigate(['cv'])
  }
  logout(){
    this.authService.logout();
    this.toastr.info('À bientôt')
    this.router.navigate(['login'])

  }
}
