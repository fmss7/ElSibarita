import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';


@Injectable()

export class DatabaseService {

	private baseUrl = "http://192.168.1.5/appAPI.php?method="

	constructor(private http: Http) {
	}

	getUsuarios(): Observable<any> {
		return this.http.get(this.baseUrl + 'getUsuarios')
			.map(res => {
				if (res["_body"] != "") {
					return JSON.parse(res["_body"]);
				} else {
					return [];
				}
			});
	}

}