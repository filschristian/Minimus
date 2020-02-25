import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card-component/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { environment } from '../environments/environment';
import { AngularFireLite } from 'angularfire-lite';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    AngularFireLite.forRoot(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
