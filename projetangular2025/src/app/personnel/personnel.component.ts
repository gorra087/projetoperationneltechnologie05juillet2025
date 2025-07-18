import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-personnel',
  imports: [],
  templateUrl: './personnel.component.html',
  styleUrl: './personnel.component.css'
})
export class PersonnelComponent {
	constructor(private cont:Router){}
	onValiderconnecter():void{
		this.cont.navigateByUrl('connection');
	}

}
