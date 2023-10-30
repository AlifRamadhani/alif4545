import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KerenbangetComponent } from './kerenbanget/kerenbanget.component';

@NgModule({
  declarations: [
    AppComponent,
    KerenbangetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
