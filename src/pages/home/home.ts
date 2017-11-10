import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DatabaseService } from '../../services/databaseService';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	usuarios: any[];
	constructor(public navCtrl: NavController, private databaseService: DatabaseService) {
	}

	ionViewDidLoad() {
		this.databaseService.getUsuarios().subscribe(usuarios => {
			console.log('usuarios: ', usuarios);
			this.usuarios = usuarios;
		});
	}

}
