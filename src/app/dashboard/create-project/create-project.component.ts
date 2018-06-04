import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

    project = {};
    serverFailed: boolean;

    constructor(private _router: Router, private _loadingService: TdLoadingService,
        private _authService: AuthService) { }

    ngOnInit() {
    }

    createProject() {
        this._loadingService.register();
        this._authService.addProject(this.project)
            .subscribe((res: any) => {
                console.log(res);
                this._loadingService.resolve();
                this._router.navigate(['/dashboard']);
            }, (err: any) => {
                this.serverFailed = true;
                console.log(err);
                this._loadingService.resolve();
            });
    }

}
