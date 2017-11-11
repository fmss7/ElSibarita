import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';


@Injectable()

export class DatabaseService {
	private apikey: string = 'sibari';
	private apiurl: string = 'https://elsibarita.000webhostapp.com/appAPI.php?apikey='+ this.apikey +'&method=';

	constructor(private http: Http) {
	}

	getUsuarios(): Observable<any> {
		return this.http.get(this.apiurl + 'getUsuarios')
			.map(res => {
				if (res["_body"] != "") {
					return JSON.parse(res["_body"]);
				} else {
					return [];
				}
			});
	}

}