import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
		private greetUrl = 'api/Hello';

		// Resolve HTTP using the constructor
		constructor(private http: HttpClient) { }

		sayHello(): Observable<any> {
			return this
				.http.get(this.greetUrl)
				.pipe(
					map((response: Response) => {
						return response.text();
					})
				);
		}
}
