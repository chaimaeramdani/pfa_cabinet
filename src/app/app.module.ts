import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { TestComponent } from './test/test.component';
import { RedezvousComponent } from './redezvous/redezvous.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { clientService } from './Service/Client.service';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    RendezvousComponent,
    TestComponent,
    RedezvousComponent,
    ContacteznousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
      })
  ],
  providers: [clientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
