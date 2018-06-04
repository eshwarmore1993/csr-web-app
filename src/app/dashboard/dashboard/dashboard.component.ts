import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    ngoName = '';
    constructor(private _router: Router) {
    }

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.ngoName = user.ngo_name;
    }

    logout() {
        localStorage.clear();
        this._router.navigate(['/']);
    }

}
