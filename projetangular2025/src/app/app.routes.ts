import { Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

import { ActualiteComponent }from './actualite/actualite.component';
import {PersonnelComponent } from './personnel/personnel.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfileComponent } from './profile/profile.component';
import {CommunicationComponent } from './communication/communication.component';
export const routes: Routes = [
	
	{path:'personnel', component:PersonnelComponent},
	{path:'connection', component:ConnectionComponent},
	{path:'communication', component:CommunicationComponent},
	{path:'inscription', component:InscriptionComponent},
	{path:'profile', component:ProfileComponent},
	{path:'etudiant', component:EtudiantComponent},
	{path:'', component: ActualiteComponent}
];
