import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UserService } from '../../services/userService';

@Component({
	selector: 'signInPage',
	templateUrl: 'signInPage.html',
})
export class SignInPage {

	name: string = '';
	surname: string = '';
	username: string = '';
	email: string = '';
	password1: string = '';
	password2: string = '';
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private toastController: ToastController,
		private userService: UserService
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignInPage');
	}

	signIn() {
		let signIn = true;
		if (this.name == '') {
			//algo aquí para poner el input en rojo
			signIn = false;
		}
		if (this.surname == '') {
			//algo aquí para poner el input en rojo
			signIn = false;
		}
		/*
		if (this.username == '') {
			//algo aquí para poner el input en rojo
			signIn = false;
		}
		var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regExp.test(this.email)) {
			//algo aquí para poner el input en rojo
			signIn = false;
		}
		if ( this.password1.length < 6 || this.password1 != this.password2 || this.password1.search(/\d/) == -1 || this.password1.search(/[a-zA-Z]/) == -1) {
			//algo aquí para poner el input en rojo
			signIn = false;
		}
*/
		if (signIn) {
			let user = {
				'name': this.name,
				'surname': this.surname,
				'username': this.username,
				'email': this.email,
				'password': this.password1,
			}
			this.userService.signIn(user).subscribe(res => {
				if(res){
					console.log('Vale, todo crema sosio');
				}else{
					console.log('No se pudo registrar al usuario');
				}
			});
		} else {
			let toast = this.toastController.create({
				message: 'Alguno de los campos intoducidos no son válidos',
				duration: 1500,
				position: 'bottom'
			});
			toast.present();
			return signIn;
		}
	}

}

