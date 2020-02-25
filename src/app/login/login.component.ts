import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  constructor(public fb: FbService, public router: Router) { }

  ngOnInit(): void {
  }

  login(e) {
    this.fb.signin(e.target.email.value, e.target.password.value).pipe(first()).subscribe(() => {
      this.router.navigateByUrl('');
    }, err => {
      this.errorMessage = err;
      setTimeout(() => this.errorMessage = '');
    });
  }

}
