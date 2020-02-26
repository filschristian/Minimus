import { Component, OnInit, OnDestroy } from '@angular/core';
import { FbService } from '../fb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cities = [];
  sub1: Subscription;
  constructor(public fb: FbService) { }

  ngOnInit(): void {
    this.sub1 = this.fb.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

}
