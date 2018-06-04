import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
// import { User } from './user.model';
import { URLS } from '../urls';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    qualifications: string[] = [
        'Animal Welfare', 'Children', 'Disability', 'Education', 'Elderly Care',
        'Environment', 'Health', 'Livelihood', 'Women Emporment', 'Other'
    ];
    user: any;
    confirmPassword: string;

    loginFailed: boolean;
    serverFailed: boolean;

    constructor(private _router: Router, private _loadingService: TdLoadingService,
        private _http: Http) { }

    ngOnInit(): void {
        this.user = {};
    }

    register(): void {
        let options: RequestOptionsArgs;
        const headers = new Headers({ 'content-type': 'application/json' });
        options = {
            headers: headers
        };
        this._loadingService.register();
        this._http.post(URLS.REGISTER, this.user, options)
            .subscribe((res: any) => {
                console.log(res);
                this._loadingService.resolve();
                this._router.navigate(['/login']);
            }, (err: any) => {
                this.serverFailed = true;
                console.log(err);
                this._loadingService.resolve();
            });
    }

}
