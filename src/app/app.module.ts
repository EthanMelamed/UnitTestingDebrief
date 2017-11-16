import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppPipe } from './app.pipe';
import { CoreService } from './core.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
