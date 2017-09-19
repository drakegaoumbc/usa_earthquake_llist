import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRouting } from './app-route';
import { AppComponent } from './app.component';
import { SVGMapComponent } from './svg-map/svg-map.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SafePipe } from './Sanitizer'
import { HoverStateDirective } from './state-hover-directive';
import { EarthquakeServiceComponent } from './earthquake-service/earthquake-service.component';
import { HomePageTableComponent } from './home-page-table/home-page-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SVGMapComponent,
    AboutComponent,
    HomeComponent,
    SafePipe,
    HoverStateDirective,
    EarthquakeServiceComponent,
    HomePageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    FormsModule
  ],
  providers: [EarthquakeServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
