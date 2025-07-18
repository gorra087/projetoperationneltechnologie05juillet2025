import { Component } from '@angular/core';                                      
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PolesComponent } from './poles/poles.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
//import {PersonnelComponent } from './personnel/personnel.component';
//import { EtudiantComponent } from './etudiant/etudiant.component';
//import { ConnectionComponent } from './connection/connection.component';
import {FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
RouterOutlet,
NavigationComponent,
PolesComponent,
StatistiquesComponent,
//PersonnelComponent,
//EtudiantComponent,
//ConnectionComponent,
FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
	}
