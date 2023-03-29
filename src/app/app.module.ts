import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartButtonComponent } from './start-button/start-button.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { ControlButtonShelfComponent } from './control-button-shelf/control-button-shelf.component';
import { AddTimeButtonComponent } from './add-time-button/add-time-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeDisplayComponent,
    StartButtonComponent,
    ResetButtonComponent,
    ControlButtonShelfComponent,
    AddTimeButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
