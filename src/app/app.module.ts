import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokenRouteComponent } from './broken-route/broken-route.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokenRouteComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
