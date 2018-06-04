import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLS } from '../urls';

@Injectable()
export class AuthService {

    constructor(private _http: Http) { }

    private getHeaders(): RequestOptionsArgs {
        let options: RequestOptionsArgs;
        const headers = new Headers({ 'content-type': 'application/json' });
        let token = localStorage.getItem('token');
        token = token.replace(/"/g, '');
        headers.append('Authorization', token);
        options = {
            headers: headers
        };

        return options;
    }

    public addProject(project: any): Observable<any> {
        return this._http.post(URLS.PROJECTS, project, this.getHeaders());
    }

    public getProjects(): Observable<any> {
        return this._http.get(URLS.PROJECTS, this.getHeaders());
    }
}
