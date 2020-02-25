import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponentComponent } from './weather-card-component.component';

describe('WeatherCardComponentComponent', () => {
  let component: WeatherCardComponentComponent;
  let fixture: ComponentFixture<WeatherCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
