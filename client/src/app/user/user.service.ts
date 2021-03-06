import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {api} from "../constants/api";
import {AuthorityWorker} from "../common/authority-worker";
import {CommonService} from "../common/common.service";

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getCurrentUser(): Observable<any> {
        const headers: Headers = new Headers({'x-auth-token': AuthorityWorker.getCurrentUser().token});
        return this.http.get(api.USER + "/me", new RequestOptions({headers: headers}))
            .map((response: Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Response status: " + response.status);
                }
            });
    }

    update(URL: string, body: any): Observable<any> {
        return this.http.put(URL, body, CommonService.generateOptions())
            .map((response: Response) => {
                if (response.status != 200) {
                    throw new Error('Exception: ' + response.status);
                }
            })
    }
}