import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './shared-components/app/app.component';
import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    // Add any other components you create here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Required for making HTTP requests
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
