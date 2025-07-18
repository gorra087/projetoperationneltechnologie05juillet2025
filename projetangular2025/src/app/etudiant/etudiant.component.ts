import { Component } from '@angular/core';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
	constructor(private connect:Router){}
		onValidercon():void{
			this.connect.navigateByUrl('connection');
		}
}
