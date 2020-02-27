import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  darkModeState: BehaviorSubject<boolean>;
  savedState: string;
  constructor() {
    this.savedState = localStorage.getItem('darkModeState');
    this.darkModeState = new BehaviorSubject<boolean>(JSON.parse(this.savedState));
  }
}
