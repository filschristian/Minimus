import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from './ui.service';
import {FbService} from './fb.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor(public ui: UiService, public fb: FbService, public router: Router) {
  }

  loggedIn = this.checkLoginStatus();
  sub1;

  checkLoginStatus() {
    return this.fb.isAuth();
  }


  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    this.fb.auth.userData().subscribe((user) => {
      this.userEmail = user.email;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    localStorage.setItem('darkModeState', `${!this.darkModeActive}`);
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.auth.signout();
    this.loggedIn = this.checkLoginStatus();
  }

}
