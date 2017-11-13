import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';


@Injectable()

export class UserService {
	private apikey: string = 'sibari';
	private apiurl: string = 'https://elsibarita.000webhostapp.com/appAPI.php?apikey='+ this.apikey +'&method=';

	constructor(private http: Http) {
	}

	signIn(user): Observable<any> {
		return this.http.post(this.apiurl + 'signIn', {'user': user})
			.map(res => {
				if (res["_body"] != "") {
					console.log(JSON.parse(res["_body"]));
				} else {
					return [];
				}
			});
	}

}