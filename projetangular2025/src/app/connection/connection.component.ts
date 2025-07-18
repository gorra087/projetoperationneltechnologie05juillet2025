import { Component } from '@angular/core';
 import { Router } from '@angular/router'   
@Component({
  selector: 'app-connection',
  imports: [],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
	constructor(private router:Router){}
		onValiderformulaire():void{
			this.router.navigateByUrl('accueil');
		}
	

}
