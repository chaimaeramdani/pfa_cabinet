import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { TestComponent } from './test/test.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path: "connexion",component: ConnexionComponent},
  {path: "inscription",component: InscriptionComponent},
  {path: "home",component: TestComponent},
  {path: "rdv",component: RendezvousComponent},
  {path: "contact",component: ContacteznousComponent},
  {path: "**",component: TestComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ConnexionComponent,InscriptionComponent]
