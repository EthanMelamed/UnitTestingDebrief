import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class CoreService {

    constructor(public http: Http) {

    }

    request(url: string): any {
        return new Promise((resolve, reject) => {
            this.http.get(url)
                .subscribe((result: any) => {
                    try {
                        resolve(result.json());
                    }
                    catch(e){
                        console.log(e);
                        resolve(null);
                    }
                });
        });
    }
}
