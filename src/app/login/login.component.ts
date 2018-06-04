import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';

// import { LoginService } from './login.service';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

import { URLS } from '../urls';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent {

    email: string;
    password: string;
    loginFailed: boolean;
    serverFailed: boolean;

    constructor(private _router: Router, private _loadingService: TdLoadingService,
        private _http: Http) { }

    login(): void {
        this.resetErrorMessages();
        this._loadingService.register();
        let options: RequestOptionsArgs;
        const headers = new Headers({ 'content-type': 'application/json' });
        options = {
            headers: headers
        };
        this._http.post(URLS.LOGIN, { username: this.email, password: this.password }, options).subscribe((res: any) => {
            this._loadingService.resolve();
            console.log(JSON.parse(res._body).user);
            if (JSON.parse(res._body).hasOwnProperty('token')) {
                localStorage.setItem('token', JSON.stringify(JSON.parse(res._body).token));
                localStorage.setItem('user', JSON.stringify(JSON.parse(res._body).user));

                this._router.navigate(['/dashboard']);
            } else {
                this.loginFailed = true;
            }
        }, (error: any) => {
            this._loadingService.resolve();
            this.serverFailed = true;
            console.log(error);
        });
    }

    private resetErrorMessages(): void {
        this.loginFailed = false;
        this.serverFailed = false;
    }
}
