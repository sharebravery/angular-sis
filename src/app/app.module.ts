import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FashionListComponent } from './fashion-list/fashion-list.component';
import { RecentSixYearsComponent } from './recent-six-years/recent-six-years.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FashionListComponent,
    RecentSixYearsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
