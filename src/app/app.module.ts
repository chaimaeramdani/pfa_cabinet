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
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
