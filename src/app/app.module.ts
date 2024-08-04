import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChotchkiesModule } from './chotchkies/chotchkies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChotchkiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
