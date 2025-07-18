import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
	constructor(private profil:Router){}
	onValideretudier():void{
		this.profil.navigateByUrl('etudiant');
	}
	onValiderpersonnel():void{
			this.profil.navigateByUrl('personnel');
		}

}
