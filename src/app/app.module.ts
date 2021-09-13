import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
